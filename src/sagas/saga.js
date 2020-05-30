import { takeEvery, call } from 'redux-saga/effects'

import { SELECT_FILE, SELECT_HASH_TYPE } from '../actions'
import { getArrayBuffer, calculateHash } from '.'

function* processFile({ payload: { file } }) {
  yield call(getArrayBuffer, file)
  yield call(calculateHash)
}

function* processHashType() {
  yield call(calculateHash)
}

export const saga = function* () {
  yield takeEvery(SELECT_FILE, processFile)
  yield takeEvery(SELECT_HASH_TYPE, processHashType)
}
