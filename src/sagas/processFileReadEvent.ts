import { put } from 'redux-saga/effects'

import { fileLoaded, fileLoadProgress } from '../actions'
import type { FileReadEvent } from './createFileReadChannel'

export const processFileReadEvent = function* (event: FileReadEvent) {
  const { arrayBuffer, error, progress } = event

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
}
