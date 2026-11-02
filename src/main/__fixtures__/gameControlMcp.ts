import { promises as fs } from 'node:fs'
import path from 'node:path'
import { createHash, randomUUID } from 'node:crypto'
import { spawn, type ChildProcessWithoutNullStreams } from 'node:child_process'
import { ModMindBridge, type ExternalAgentBridgeHandlers } from '../externalAgents'
import type { ProjectInfo } from '../../shared/types'
import type { BackgroundMinecraftTestService } from '../backgroundMinecraftTestService'
import { normalizeWorkbenchFeatures } from '../../shared/workbenchFeatures'

/** Real JSON-RPC stdio -> HTTP bridge -> built-in discovery/schema/review/project -> business service. */
export async function gameControlMcpFixture(project: () => ProjectInfo, service: BackgroundMinecraftTestService, options: { standalone?: boolean; rendered?: boolean; readOnly?: boolean } = {}) {
  const initialProject = { ...project() }
  const root = initialProject.path
  let authorized = true
  const noop = async () => ({})
  const handlers: ExternalAgentBridgeHandlers = { projectInfo: { ...project() }, projectFiles: async () => ({ files: [], truncated: false }), setIntent: noop, applyEdits: noop, updateTodo: noop, mappingsSearch: noop, mappingsClass: noop, dependencySearch: noop, dependencyInstall: noop, contentValidate: noop, testMatrix: noop, releasePreflight: noop, build: noop, testMinecraft: noop, blockbenchActions: noop, runtimeState: noop,
    reviewAction: async () => ({ approved: authorized, complete: true, risk: 'low', dangerousOperations: [], feedback: authorized ? '' : 'Fixture denies process permission' }), playerTest: (category, input) => service.execute(initialProject, category, input) }
  const features = normalizeWorkbenchFeatures({ headlessTesting: true, renderedTesting: options.rendered !== false, imageGeneration: true, modeling: true })
  const bridge = new ModMindBridge(project(), handlers, 'test', undefined, options.readOnly === true, undefined, undefined, features)
  const { mcpConfigPath } = await bridge.start(); await bridge.writeMcpConfig(mcpConfigPath)
  const config = JSON.parse(await fs.readFile(mcpConfigPath, 'utf8')).mcpServers.modmind
  const child = spawn(config.command, options.standalone ? [path.resolve('modmind-mcp-open-source/src/mcp-server.mjs')] : config.args,
    { env: { ...process.env, ...config.env, MODMIND_BRIDGE_CONFIG: path.join(path.dirname(mcpConfigPath), 'bridge.json') }, windowsHide: true, stdio: ['pipe', 'pipe', 'pipe'] })
  let sequence = 0, buffer = '', diagnostic = ''
  const pending = new Map<number, { resolve: (value: any) => void; reject: (error: Error) => void; timer: ReturnType<typeof setTimeout> }>()
  child.stdout.on('data', (bytes: Buffer) => {
    buffer += bytes.toString('utf8')
    for (let index; (index = buffer.indexOf('\n')) >= 0;) {
      const line = buffer.slice(0, index); buffer = buffer.slice(index + 1); if (!line.trim()) continue
      const value = JSON.parse(line), entry = pending.get(value.id)
      if (entry) { clearTimeout(entry.timer); pending.delete(value.id); entry.resolve(value) }
    }
  })
  child.stderr.on('data', bytes => { diagnostic = (diagnostic + bytes).slice(-4000) })
  child.once('exit', code => { for (const entry of pending.values()) { clearTimeout(entry.timer); entry.reject(new Error(`MCP exited ${code}: ${diagnostic}`)) } pending.clear() })
  const rpc = (method: string, params?: unknown) => new Promise<any>((resolve, reject) => {
    const id = ++sequence, timer = setTimeout(() => { pending.delete(id); reject(new Error('MCP response timeout')) }, 30000)
    pending.set(id, { resolve, reject, timer }); child.stdin.write(JSON.stringify({ jsonrpc: '2.0', id, method, params }) + '\n')
  })
  return { bridge, child: child as ChildProcessWithoutNullStreams,
    list: () => rpc('tools/list'), call: (category: string, input: Record<string, unknown>) => rpc('tools/call', { name: 'modmind_test_' + category, arguments: input }),
    setAuthorized: (value: boolean) => { authorized = value },
    close: async () => { for (const entry of pending.values()) { clearTimeout(entry.timer); entry.reject(new Error('MCP fixture closed')) } pending.clear(); child.stdin.end(); await service.stop(); await bridge.stop(); if (child.exitCode === null) child.kill() }
  }
}
