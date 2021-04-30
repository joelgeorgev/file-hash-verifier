import { put, call, select, SagaReturnType } from 'redux-saga/effects'

import { hashCalculated } from '../actions'
import type { State } from '../store'
import type { HashType } from '../types'

const toHexadecimal = (num: number): string => num.toString(16).padStart(2, '0')

const getFileHash = async (
  arrayBuffer: ArrayBuffer,
  hashType: HashType
): Promise<string> => {
  const hashBuffer = await crypto.subtle.digest(hashType, arrayBuffer)
  const byteArray = Array.from(new Uint8Array(hashBuffer))
  const hash = byteArray.map(toHexadecimal).join('')

  return hash
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
