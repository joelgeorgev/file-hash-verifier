import { eventChannel, END, EventChannel } from 'redux-saga'
import { take, put, call, race } from 'redux-saga/effects'

import { fileLoaded, fileLoadProgress } from '../actions'
import { CANCEL_FILE_LOAD } from '../actions'

const createFileReadChannel = (file: File): EventChannel<unknown> => {
  return eventChannel((emitter) => {
    let reader = new FileReader()

    const onLoad = (): void => {
      emitter({ arrayBuffer: reader.result })
      emitter(END)
    }

    const onProgress = (event: ProgressEvent): void => {
      emitter({ progress: Math.round((event.loaded / event.total) * 100) })
    }

    const onError = (): void => {
      emitter({ error: reader.error })
      emitter(END)
    }

    reader.onload = onLoad
    reader.onprogress = onProgress
    reader.onerror = onError

    reader.readAsArrayBuffer(file)

    const unsubscribe = (): void => {
      if (reader.readyState === 1) {
        reader.abort()
      }
    }

    return unsubscribe
  })
}

export const getArrayBuffer = function* (file: File) {
  const fileReadChannel: EventChannel<unknown> = yield call(
    createFileReadChannel,
    file
  )

  try {
    while (true) {
      const { channelOutput, cancelFileLoad } = yield race({
        channelOutput: take(fileReadChannel),
        cancelFileLoad: take(CANCEL_FILE_LOAD)
      })

      if (channelOutput) {
        const { progress, arrayBuffer, error } = channelOutput

        if (arrayBuffer) {
          yield put(fileLoaded(arrayBuffer))
          return
        }

        if (error) {
          console.error('Error during file read operation: ', error)
          return
        }

        yield put(fileLoadProgress(progress))
      } else if (cancelFileLoad) {
        fileReadChannel.close()
      }
    }
  } finally {
    fileReadChannel.close()
  }
}
