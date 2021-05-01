import { all, takeEvery } from 'redux-saga/effects'

import { SELECT_FILE, SELECT_HASH_TYPE, FILE_LOADED } from '../actions'
import { loadFile } from './loadFile'
import { calculateHash } from './calculateHash'

export const rootSaga = function* () {
  yield all([
    takeEvery(SELECT_FILE, loadFile),
    takeEvery(SELECT_HASH_TYPE, calculateHash),
    takeEvery(FILE_LOADED, calculateHash)
  ])
}
