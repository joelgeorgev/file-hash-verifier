import { setHashType, setProgress, setLoading } from './index'
import { SET_HASH_TYPE, SET_PROGRESS, SET_LOADING } from '../constants/ActionTypes'

describe('actions test', () => {
  it('setHashType should create SET_HASH_TYPE action', () => {
    const hashType = 'sha-512'
    const result = { type: SET_HASH_TYPE, hashType }
    expect(setHashType(hashType)).toEqual(result)
  })

  it('setProgress should create SET_PROGRESS action', () => {
    const progress = '100'
    const result = { type: SET_PROGRESS, progress }
    expect(setProgress(progress)).toEqual(result)
  })

  it('setLoading should create SET_LOADING action', () => {
    const loading = 'true'
    const result = { type: SET_LOADING, loading }
    expect(setLoading(loading)).toEqual(result)
  })
})