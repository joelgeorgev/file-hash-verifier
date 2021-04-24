import { takeEvery, call } from 'redux-saga/effects'

import { SELECT_FILE, SELECT_HASH_TYPE, selectFile } from '../actions'
import { getArrayBuffer, calculateHash } from '.'

function* processFile(action: ReturnType<typeof selectFile>) {
  yield call(getArrayBuffer, action.payload.file)
  yield call(calculateHash)
}

function* processHashType() {
  yield call(calculateHash)
}

export const saga = function* () {
  yield takeEvery(SELECT_FILE, processFile)
  yield takeEvery(SELECT_HASH_TYPE, processHashType)
}
