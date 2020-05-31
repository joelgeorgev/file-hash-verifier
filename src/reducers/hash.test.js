import { hash } from './hash'
import { hashCalculated, selectFile, selectHashType } from '../actions'

const someHash = 'hash'

describe('hash reducer', () => {
  test('returns the initial state', () => {
    expect(hash(undefined, {})).toEqual(null)
  })

  test('handles HASH_CALCULATED action', () => {
    const action = hashCalculated(someHash)

    expect(hash(null, action)).toEqual(someHash)
  })

  test('handles SELECT_FILE action', () => {
    const action = selectFile()

    expect(hash(someHash, action)).toEqual(null)
  })

  test('handles SELECT_HASH_TYPE action', () => {
    const action = selectHashType()

    expect(hash(someHash, action)).toEqual(null)
  })
})
