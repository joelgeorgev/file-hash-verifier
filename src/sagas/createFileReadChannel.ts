import { eventChannel, END, EventChannel } from 'redux-saga'

import { getFileReader } from '../utils'

export interface FileReadEvent {
  arrayBuffer?: ArrayBuffer
  progress?: number
  error?: FileReader['error']
}

export const createFileReadChannel = (
  file: File
): EventChannel<FileReadEvent> =>
  eventChannel((emitter: (input: FileReadEvent | END) => void) => {
    const reader = getFileReader()

    reader.onload = (): void => {
      emitter({ arrayBuffer: reader.result as ArrayBuffer })
      emitter(END)
    }

    reader.onprogress = (event): void => {
      emitter({ progress: Math.round((event.loaded / event.total) * 100) })
    }

    reader.onerror = (): void => {
      emitter({ error: reader.error })
      emitter(END)
    }

    reader.readAsArrayBuffer(file)

    return (): void => {
      if (reader.readyState !== 1) {
        return
      }

      reader.abort()
    }
  })
