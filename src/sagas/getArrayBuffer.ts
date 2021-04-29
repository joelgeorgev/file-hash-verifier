import { eventChannel, END, EventChannel } from 'redux-saga'
import { take, put, call, race, SagaReturnType } from 'redux-saga/effects'

import { CANCEL_FILE_LOAD, fileLoaded, fileLoadProgress } from '../actions'

interface FileReadEvent {
  arrayBuffer?: ArrayBuffer
  progress?: number
  error?: FileReader['error']
}

const createFileReadChannel = (file: File): EventChannel<FileReadEvent> =>
  eventChannel((emitter: (input: FileReadEvent | END) => void) => {
    const reader = new FileReader()

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
      if (reader.readyState === 1) {
        reader.abort()
      }
    }
  })

export const getArrayBuffer = function* (file: File) {
  const fileReadChannel: SagaReturnType<
    typeof createFileReadChannel
  > = yield call(createFileReadChannel, file)

  try {
    while (true) {
      const { channelOutput, cancelFileLoad } = yield race({
        channelOutput: take(fileReadChannel),
        cancelFileLoad: take(CANCEL_FILE_LOAD)
      })

      if (channelOutput) {
        const { arrayBuffer, progress, error } = channelOutput as FileReadEvent

        if (arrayBuffer) {
          yield put(fileLoaded(arrayBuffer))
          return
        }

        if (error) {
          console.error('Error during file read operation: ', error)
          return
        }

        if (progress !== undefined) {
          yield put(fileLoadProgress(progress))
        }
      } else if (cancelFileLoad) {
        fileReadChannel.close()
      }
    }
  } finally {
    fileReadChannel.close()
  }
}
