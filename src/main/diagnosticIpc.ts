import { ipcMain } from 'electron'
import { diagnosticJournal } from './diagnosticLog'
import { DiagnosticOperations } from './diagnosticOperations'
import { diagnosticArguments } from './diagnosticContext'

export const diagnosticIpcOperations = new DiagnosticOperations(diagnosticJournal)

export const diagnosticHandle: typeof ipcMain.handle = (channel, listener) => {
  ipcMain.handle(channel, (event, ...args) => {
    const input = diagnosticArguments(channel, args)
    const explicitProjectPath = input.projectPath ?? input.expectedProjectPath ?? (input.options as Record<string, unknown> | undefined)?.projectPath ?? (input.input as Record<string, unknown> | undefined)?.projectPath
    return diagnosticIpcOperations.run('ipc', channel,
      { webContentsId: event.sender.id, osProcessId: event.sender.getOSProcessId(), input, ...(typeof explicitProjectPath === 'string' ? { projectPath: explicitProjectPath } : {}) }, () => listener(event, ...args))
  })
}
