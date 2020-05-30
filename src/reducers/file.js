import { SELECT_FILE, CANCEL_FILE_LOAD } from '../actions'

const initialState = null

export const file = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_FILE:
      return payload.file
    case CANCEL_FILE_LOAD:
      return initialState
    default:
      return state
  }
}
