import { hashType } from './hashType'
import { selectHashType } from '../actions'

const someHashType = 'sha-512'

describe('hashType reducer', () => {
  test('returns the initial state', () => {
    expect(hashType(undefined, {})).toEqual(null)
  })

  test('handles SELECT_HASH_TYPE action', () => {
    const action = selectHashType(someHashType)

    expect(hashType(null, action)).toEqual(someHashType)
  })
})
