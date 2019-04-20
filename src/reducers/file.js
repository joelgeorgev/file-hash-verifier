import { SAVE_FILE } from '../constants/ActionTypes'

export const file = (state = null, action) => {
  switch (action.type) {
    case SAVE_FILE:
      return action.file
    default:
      return state
  }
}
