import { isCalculatingHash } from './isCalculatingHash'
import { hashCalculationStarted, hashCalculated } from '../actions'

describe('isCalculatingHash reducer', () => {
  test('returns the initial state', () => {
    expect(isCalculatingHash(undefined, {})).toEqual(false)
  })

  test('handles HASH_CALCULATION_STARTED action', () => {
    const action = hashCalculationStarted()

    expect(isCalculatingHash(false, action)).toEqual(true)
  })

  test('handles HASH_CALCULATED action', () => {
    const action = hashCalculated()

    expect(isCalculatingHash(true, action)).toEqual(false)
  })
})
