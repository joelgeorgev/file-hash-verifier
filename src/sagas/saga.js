import { takeEvery, put, call } from 'redux-saga/effects'

import { saveFile, saveHashType } from '../actions'
import { SET_FILE, SET_HASH_TYPE } from '../constants/ActionTypes'
import { getArrayBuffer, calculateHash } from '.'

function* processFile(action) {
  const { file } = action
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
  yield takeEvery(SET_FILE, processFile)
  yield takeEvery(SET_HASH_TYPE, processHashType)
}