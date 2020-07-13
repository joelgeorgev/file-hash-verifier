import { put, call, select } from 'redux-saga/effects'

import { hashCalculated } from '../actions'

const getHash = async ({ arrayBuffer, hashType }) => {
  if (arrayBuffer && hashType) {
    const hashBuffer = await crypto.subtle.digest(hashType, arrayBuffer)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray
      .map((b) => ('00' + b.toString(16)).slice(-2))
      .join('')
    return hashHex
  }
  return ''
}

const getArrayBuffer = (state) => state.arrayBuffer
const getHashType = (state) => state.hashType

export const calculateHash = function* () {
  const arrayBuffer = yield select(getArrayBuffer)
  const hashType = yield select(getHashType)
  const hash = yield call(getHash, { arrayBuffer, hashType })
  yield put(hashCalculated(hash))
}
