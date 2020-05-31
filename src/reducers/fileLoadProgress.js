import { FILE_LOAD_PROGRESS, CANCEL_FILE_LOAD, FILE_LOADED } from '../actions'

const initialState = null

export const fileLoadProgress = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILE_LOAD_PROGRESS:
      return payload.progress
    case CANCEL_FILE_LOAD:
    case FILE_LOADED:
      return initialState
    default:
      return state
  }
}
