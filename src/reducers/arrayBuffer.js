import { FILE_LOADED, SELECT_FILE } from '../actions'

const initialState = null

export const arrayBuffer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILE_LOADED:
      return payload.arrayBuffer
    case SELECT_FILE:
      return initialState
    default:
      return state
  }
}
