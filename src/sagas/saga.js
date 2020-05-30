import { takeEvery, put, call } from 'redux-saga/effects'

import { saveFile, saveHashType, SELECT_FILE, SET_HASH_TYPE } from '../actions'
import { getArrayBuffer, calculateHash } from '.'

function* processFile({ payload: { file } }) {
  yield put(saveFile(file))
  yield call(getArrayBuffer, file)
  yield call(calculateHash)
}

function* processHashType(action) {
  const { hashType } = action
  yield put(saveHashType(hashType))
  yield call(calculateHash)
}

export const saga = function* () {
  yield takeEvery(SELECT_FILE, processFile)
  yield takeEvery(SET_HASH_TYPE, processHashType)
}
