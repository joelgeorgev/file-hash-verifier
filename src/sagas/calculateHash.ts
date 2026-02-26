import { select, call, put, SagaReturnType } from 'redux-saga/effects'

import { getFileHash } from '../utils/getFileHash.ts'
import { hashCalculated } from '../actions/index.ts'
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
