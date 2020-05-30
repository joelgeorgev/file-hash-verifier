import { SELECT_HASH_TYPE } from '../actions'

const initialState = null

export const hashType = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_HASH_TYPE:
      return payload.hashType
    default:
      return state
  }
}
