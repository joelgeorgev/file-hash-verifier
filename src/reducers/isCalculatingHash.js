import { HASH_CALCULATION_STARTED, HASH_CALCULATED } from '../actions'

const initialState = false

export const isCalculatingHash = (state = initialState, { type }) => {
  switch (type) {
    case HASH_CALCULATION_STARTED:
      return true
    case HASH_CALCULATED:
      return initialState
    default:
      return state
  }
}
