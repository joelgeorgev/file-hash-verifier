import { hash } from './hash'
import { saveHash } from '../actions'

describe('hash reducer', () => {
  it('should handle initial state', () => {
    const result = ''
    expect(hash(undefined, {})).toEqual(result)
  })

  it('should handle SAVE_HASH', () => {
    const inputHash = 'hash'
    const result = inputHash
    expect(hash('', saveHash(inputHash))).toEqual(result)
  })
})
