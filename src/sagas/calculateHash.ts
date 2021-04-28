import { put, call, select } from 'redux-saga/effects'

import { hashCalculated } from '../actions'
import type { State } from '../store'
import type { HashType, Hash } from '../types'

const getFileHash = async (
  arrayBuffer: ArrayBuffer,
  hashType: HashType
): Promise<Hash> => {
  const hashBuffer = await crypto.subtle.digest(hashType, arrayBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray
    .map((b) => ('00' + b.toString(16)).slice(-2))
    .join('')

  return hashHex
}

export const calculateHash = function* () {
  const { arrayBuffer, hashType }: State = yield select()

  if (!arrayBuffer || !hashType) {
    return
  }

  const hash: Hash = yield call(getFileHash, arrayBuffer, hashType)
  yield put(hashCalculated(hash))
}
