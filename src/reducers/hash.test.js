import { hash } from './hash'
import { saveHash } from '../actions'

describe('hash reducer', () => {
  describe('When no action is given', () => {
    test('returns initial state', () => {
      expect(hash(undefined, {})).toEqual('')
    })
  })

  test('handles SAVE_HASH action', () => {
    const inputHash = 'hash'

    expect(hash('', saveHash(inputHash))).toEqual(inputHash)
  })
})
