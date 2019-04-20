import {
  setHashType,
  cancelFileRead,
  saveHashType,
  saveProgress,
  saveLoading,
  saveHash
} from './index'
import {
  SET_HASH_TYPE,
  CANCEL_FILE_READ,
  SAVE_HASH_TYPE,
  SAVE_PROGRESS,
  SAVE_LOADING,
  SAVE_HASH
} from '../constants/ActionTypes'

describe('actions test', () => {
  it('setHashType should create SET_HASH_TYPE action', () => {
    const hashType = 'sha-512'
    const result = { type: SET_HASH_TYPE, hashType }
    expect(setHashType(hashType)).toEqual(result)
  })

  it('cancelFileRead should create CANCEL_FILE_READ action', () => {
    const result = { type: CANCEL_FILE_READ }
    expect(cancelFileRead()).toEqual(result)
  })

  it('saveHashType should create SAVE_HASH_TYPE action', () => {
    const hashType = 'sha-512'
    const result = { type: SAVE_HASH_TYPE, hashType }
    expect(saveHashType(hashType)).toEqual(result)
  })

  it('saveProgress should create SAVE_PROGRESS action', () => {
    const progress = 100
    const result = { type: SAVE_PROGRESS, progress }
    expect(saveProgress(progress)).toEqual(result)
  })

  it('saveLoading should create SAVE_LOADING action', () => {
    const loading = true
    const result = { type: SAVE_LOADING, loading }
    expect(saveLoading(loading)).toEqual(result)
  })

  it('saveHash should create SAVE_HASH action', () => {
    const hash = 'hash'
    const result = { type: SAVE_HASH, hash }
    expect(saveHash(hash)).toEqual(result)
  })
})
