import { promises as fs } from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawn, type ChildProcessWithoutNullStreams } from 'node:child_process'
import extractZip from 'extract-zip'
import { expect, it, vi } from 'vitest'
import { ModMindBridge, type ExternalAgentBridgeHandlers } from './externalAgents'
import { ReleaseService } from './releaseService'
import { createModpackTemplate } from './modpackService'
import type { ProjectInfo } from '../shared/types'

vi.mock('electron', () => ({ app: { getPath: () => os.tmpdir() } }))

function rpc(child: ChildProcessWithoutNullStreams, id: number, method: string, params?: object): Promise<any> {
  return new Promise((resolve, reject) => {
    let buffer = ''
    const clean = (): void => { clearTimeout(timer); child.stdout.off('data', onData); child.off('close', onClose) }
    const timer = setTimeout(() => { clean(); reject(new Error('MCP response timed out')) }, 10_000)
    const onClose = (): void => { clean(); reject(new Error('MCP process exited')) }
    const onData = (chunk: Buffer): void => {
      buffer += chunk.toString()
      const newline = buffer.indexOf('\n')
      if (newline < 0) return
      clean()
      try { resolve(JSON.parse(buffer.slice(0, newline))) } catch (error) { reject(error) }
    }
    child.stdout.on('data', onData); child.once('close', onClose)
    child.stdin.write(`${JSON.stringify({ jsonrpc: '2.0', id, method, params })}\n`)
  })
}

it('discovers and calls the workbench export tool, verifies the archive, and enforces mode, project and read-only boundaries', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'modmind-export-mcp-'))
  let bridge: ModMindBridge | undefined
  let child: ChildProcessWithoutNullStreams | undefined
  const stop = async (): Promise<void> => {
    if (child && child.exitCode === null) {
      const closed = new Promise<void>(resolve => child!.once('close', () => resolve()))
      child.kill(); await closed
    }
    child = undefined
    await bridge?.stop()
  }
  try {
    const project: ProjectInfo = { path: path.join(root, 'a'), name: 'A', namespace: 'a', kind: 'modpack', loader: 'fabric', minecraftVersion: '1.21.1', loaderVersion: '0.16.5', createdAt: '' }
    const other: ProjectInfo = { ...project, path: path.join(root, 'b'), name: 'B', namespace: 'b' }
    for (const item of [project, other]) { await fs.mkdir(item.path); await createModpackTemplate(item) }
    await fs.writeFile(path.join(project.path, 'mods/private.jar'), Buffer.alloc(2048, 9))
    await fs.writeFile(path.join(project.path, 'overrides/config/pack.json'), '{"value":"A"}')
    let active = project
    const service = new ReleaseService(() => active, async () => ({ githubToken: '', modrinthToken: '', curseForgeToken: '' }), async () => {})
    await service.saveSettings({ ...await service.getSettings(), autoBump: false })
    const reviewAction = vi.fn(async () => ({ approved: true }))
    const handlers = { modpackExport: (input: Record<string, unknown>) => service.exportModpack(input, project), reviewAction } as unknown as ExternalAgentBridgeHandlers
    const start = async (readOnly: boolean): Promise<void> => {
      bridge = new ModMindBridge(project, handlers, 'development', undefined, readOnly)
      const { mcpConfigPath } = await bridge.start(); await bridge.writeMcpConfig(mcpConfigPath)
      const config = JSON.parse(await fs.readFile(mcpConfigPath, 'utf8')).mcpServers.modmind
      child = spawn(config.command, config.args, { env: { ...process.env, ...config.env }, stdio: ['pipe', 'pipe', 'pipe'] })
    }
    await start(false)
    const tools = (await rpc(child!, 1, 'tools/list')).result.tools
    const tool = tools.find((item: { name: string }) => item.name === 'modmind_modpack_export')
    expect(tool.inputSchema.properties.mode.enum).toEqual(['bundled', 'download'])
    expect(tool.annotations).toMatchObject({ readOnlyHint: false, openWorldHint: false })
    active = other
    for (const [i, mode] of ['bundled', 'download'].entries()) {
      const reply = await rpc(child!, i + 2, 'tools/call', { name: tool.name, arguments: { mode } })
      expect(reply.result.isError).not.toBe(true)
      const result = JSON.parse(reply.result.content[0].text)
      expect(result).toMatchObject({ success: true, mode, version: '0.1.0', size: expect.any(Number) })
      expect(path.relative(project.path, result.path)).toBe(path.join('.modmind/exports', `a-0.1.0-${mode}.mrpack`))
      const extracted = path.join(root, mode)
      await extractZip(result.path, { dir: extracted })
      expect(JSON.parse(await fs.readFile(path.join(extracted, 'modrinth.index.json'), 'utf8')).files).toEqual([])
      expect(await fs.readFile(path.join(extracted, 'overrides/mods/private.jar'))).toEqual(Buffer.alloc(2048, 9))
      expect(await fs.readFile(path.join(extracted, 'overrides/config/pack.json'), 'utf8')).toContain('A')
    }
    await expect(fs.access(path.join(other.path, '.modmind/exports'))).rejects.toThrow()
    expect(reviewAction).toHaveBeenCalledWith('modpack_export', { mode: 'bundled' })
    const invalid = await rpc(child!, 4, 'tools/call', { name: tool.name, arguments: { mode: 'unknown' } })
    expect(invalid.result.isError).toBe(true)
    const outside = await rpc(child!, 5, 'tools/call', { name: tool.name, arguments: { path: path.join(root, 'outside.mrpack') } })
    expect(outside.result.isError).toBe(true)
    await expect(fs.access(path.join(root, 'outside.mrpack'))).rejects.toThrow()
    await stop(); await start(true)
    const denied = await rpc(child!, 6, 'tools/call', { name: tool.name, arguments: { mode: 'bundled' } })
    expect(denied.result.isError).toBe(true)
    expect(JSON.stringify(denied.result)).toContain('只读')
  } finally {
    await stop()
    await fs.rm(root, { recursive: true, force: true })
  }
}, 30_000)
