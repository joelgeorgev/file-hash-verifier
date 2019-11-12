import { hashType } from './hashType'
import { saveHashType } from '../actions'

describe('hashType reducer', () => {
  describe('When no action is given', () => {
    test('returns initial state', () => {
      expect(hashType(undefined, {})).toEqual('')
    })
  })

  test('handles SAVE_HASH_TYPE action', () => {
    const inputHashType = 'sha-512'

    expect(hashType('', saveHashType(inputHashType))).toEqual(inputHashType)
  })
})
