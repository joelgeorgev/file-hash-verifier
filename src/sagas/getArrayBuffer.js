import { eventChannel, END } from 'redux-saga'
import { take, put, call, race } from 'redux-saga/effects'

import { saveFile, saveArrayBuffer, saveProgress } from '../actions'
import { CANCEL_FILE_READ } from '../constants/ActionTypes'

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
  yield put(saveArrayBuffer(null))
  const fileReadChannel = yield call(createFileReadChannel, file)
  try {
    while (true) {
      const { channelOutput, cancelFileRead } = yield race({
        channelOutput: take(fileReadChannel),
        cancelFileRead: take(CANCEL_FILE_READ)
      })
      if (channelOutput) {
        const { progress, arrayBuffer, error } = channelOutput
        if (arrayBuffer) {
          yield put(saveArrayBuffer(arrayBuffer))
          return
        }
        if (error) {
          console.error('Error during file read operation: ', error)
          return
        }
        yield put(saveProgress(progress))
      } else if (cancelFileRead) {
        fileReadChannel.close()
        yield put(saveProgress(-1))
        yield put(saveFile(null))
      }
    }
  } finally {
    fileReadChannel.close()
  }
}
