import { FILE_LOAD_STATUS, CANCEL_FILE_LOAD, FILE_LOADED } from '../actions'

const initialState = null

export const fileLoadStatus = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILE_LOAD_STATUS:
      return payload.status
    case CANCEL_FILE_LOAD:
    case FILE_LOADED:
      return initialState
    default:
      return state
  }
}
