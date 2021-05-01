import { put, call, select, SagaReturnType } from 'redux-saga/effects'

import { getFileHash } from '../utils'
import { hashCalculated } from '../actions'
import type { State } from '../store'

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
