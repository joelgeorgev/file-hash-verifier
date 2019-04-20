import { hashType } from './hashType'
import { saveHashType } from '../actions'

describe('hashType reducer', () => {
  it('should handle initial state', () => {
    const result = ''
    expect(hashType(undefined, {})).toEqual(result)
  })

  it('should handle SAVE_HASH_TYPE', () => {
    const inputHashType = 'sha-512'
    const result = inputHashType
    expect(hashType('', saveHashType(inputHashType))).toEqual(result)
  })
})
