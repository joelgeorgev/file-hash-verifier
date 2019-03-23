import { put, call, select } from 'redux-saga/effects'

import { saveLoading, saveHash } from '../actions'
import { arrayBufferSelector, hashTypeSelector } from '.'

const getHash = async ({ arrayBuffer, hashType }) => {
  if (arrayBuffer && hashType) {
    const hashBuffer = await crypto.subtle.digest(hashType, arrayBuffer)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('')
    return hashHex
  }
  return ''
}

export const calculateHash = function* () {
  yield put(saveHash(''))
  yield put(saveLoading(true))
  const arrayBuffer = yield select(arrayBufferSelector)
  const hashType = yield select(hashTypeSelector)
  const hash = yield call(getHash, { arrayBuffer, hashType })
  yield put(saveHash(hash))
  yield put(saveLoading(false))
}