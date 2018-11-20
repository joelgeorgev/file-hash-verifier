import { eventChannel, END } from 'redux-saga'
import { take, put, call } from 'redux-saga/effects'

import { saveArrayBuffer, saveProgress } from '../actions'

const createFileReadChannel = (file) => {
  return eventChannel((emitter) => {
    let reader = new FileReader()

    const onLoad = () => { emitter({ arrayBuffer: reader.result }); emitter(END) }
    const onProgress = (e) => { emitter({ progress: Math.round((e.loaded / e.total) * 100) }) }
    const onAbort = () => { emitter({ progress: -1 }) }
    const onError = (error) => { emitter({ error }); emitter(END) }

    reader.onload = onLoad
    reader.onprogress = onProgress
    reader.onabort = onAbort
    reader.onerror = onError

    reader.readAsArrayBuffer(file)

    const unsubscribe = () => {
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
      const { progress, arrayBuffer, error } = yield take(fileReadChannel)
      if (arrayBuffer) {
        yield put(saveArrayBuffer(arrayBuffer))
        return
      }
      if (error) {
        console.error('Error during file read operation: ', error)
        return
      }
      yield put(saveProgress(progress))
    }
  }
  finally {
    fileReadChannel.close()
  }
}