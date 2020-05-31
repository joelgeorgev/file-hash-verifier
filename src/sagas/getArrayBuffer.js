import { eventChannel, END } from 'redux-saga'
import { take, put, call, race } from 'redux-saga/effects'

import { fileLoaded, fileLoadProgress } from '../actions'
import { CANCEL_FILE_LOAD } from '../actions'

const createFileReadChannel = (file) => {
  return eventChannel((emitter) => {
    let reader = new FileReader()

    const onLoad = () => {
      emitter({ arrayBuffer: reader.result })
      emitter(END)
    }
    const onProgress = (e) => {
      emitter({ progress: Math.round((e.loaded / e.total) * 100) })
    }
    const onError = (error) => {
      emitter({ error })
      emitter(END)
    }

    reader.onload = onLoad
    reader.onprogress = onProgress
    reader.onerror = onError

    reader.readAsArrayBuffer(file)

    const unsubscribe = () => {
      if (reader.readyState === 1) {
        reader.abort()
      }
      reader = null
    }
    return unsubscribe
  })
}

export const getArrayBuffer = function* (file) {
  const fileReadChannel = yield call(createFileReadChannel, file)
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
