import { calculatingHash } from './calculatingHash'
import { hashCalculationStarted, hashCalculated } from '../actions'

describe('calculatingHash reducer', () => {
  test('returns the initial state', () => {
    expect(calculatingHash(undefined, {})).toEqual(false)
  })

  test('handles HASH_CALCULATION_STARTED action', () => {
    const action = hashCalculationStarted()

    expect(calculatingHash(false, action)).toEqual(true)
  })

  test('handles HASH_CALCULATED action', () => {
    const action = hashCalculated()

    expect(calculatingHash(true, action)).toEqual(false)
  })
})
