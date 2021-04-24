import { put, call, select } from 'redux-saga/effects'

import { hashCalculated } from '../actions'
import { State } from '../store'
import { Hash } from '../types'

type ArrayBuffer = State['arrayBuffer']
type HashType = State['hashType']

const getHash = async (
  arrayBuffer: ArrayBuffer,
  hashType: HashType
): Promise<Hash> => {
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

const getArrayBuffer = (state: State): ArrayBuffer => state.arrayBuffer
const getHashType = (state: State): HashType => state.hashType

export const calculateHash = function* () {
  const arrayBuffer: ArrayBuffer = yield select(getArrayBuffer)
  const hashType: HashType = yield select(getHashType)

  const hash: Hash = yield call(getHash, arrayBuffer, hashType)

  yield put(hashCalculated(hash))
}
