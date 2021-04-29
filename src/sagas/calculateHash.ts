import { put, call, select, SagaReturnType } from 'redux-saga/effects'

import { hashCalculated } from '../actions'
import type { State } from '../store'
import type { HashType } from '../types'

const getFileHash = async (
  arrayBuffer: ArrayBuffer,
  hashType: HashType
): Promise<string> => {
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

  const hash: SagaReturnType<typeof getFileHash> = yield call(
    getFileHash,
    arrayBuffer,
    hashType
  )
  yield put(hashCalculated(hash))
}
