import {
  setHashType,
  cancelFileRead,
  saveHashType,
  saveProgress,
  saveLoading,
  saveHash
} from '.'
import {
  SET_HASH_TYPE,
  CANCEL_FILE_READ,
  SAVE_HASH_TYPE,
  SAVE_PROGRESS,
  SAVE_LOADING,
  SAVE_HASH
} from '../constants/ActionTypes'

describe('actions', () => {
  test('setHashType creates SET_HASH_TYPE action', () => {
    const hashType = 'sha-512'
    const expected = { type: SET_HASH_TYPE, hashType }

    expect(setHashType(hashType)).toEqual(expected)
  })

  test('cancelFileRead creates CANCEL_FILE_READ action', () => {
    const expected = { type: CANCEL_FILE_READ }

    expect(cancelFileRead()).toEqual(expected)
  })

  test('saveHashType creates SAVE_HASH_TYPE action', () => {
    const hashType = 'sha-512'
    const expected = { type: SAVE_HASH_TYPE, hashType }

    expect(saveHashType(hashType)).toEqual(expected)
  })

  test('saveProgress creates SAVE_PROGRESS action', () => {
    const progress = 100
    const expected = { type: SAVE_PROGRESS, progress }

    expect(saveProgress(progress)).toEqual(expected)
  })

  test('saveLoading creates SAVE_LOADING action', () => {
    const loading = true
    const expected = { type: SAVE_LOADING, loading }

    expect(saveLoading(loading)).toEqual(expected)
  })

  test('saveHash creates SAVE_HASH action', () => {
    const hash = 'hash'
    const expected = { type: SAVE_HASH, hash }

    expect(saveHash(hash)).toEqual(expected)
  })
})
