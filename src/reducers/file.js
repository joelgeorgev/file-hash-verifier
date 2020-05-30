import { SAVE_FILE } from '../actions'

export const file = (state = null, action) => {
  switch (action.type) {
    case SAVE_FILE:
      return action.file
    default:
      return state
  }
}
