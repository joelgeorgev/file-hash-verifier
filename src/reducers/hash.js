import { HASH_CALCULATED, SELECT_FILE, SELECT_HASH_TYPE } from '../actions'

const initialState = null

export const hash = (state = initialState, { type, payload }) => {
  switch (type) {
    case HASH_CALCULATED:
      return payload.hash
    case SELECT_FILE:
    case SELECT_HASH_TYPE:
      return initialState
    default:
      return state
  }
}
