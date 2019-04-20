import { SAVE_HASH } from '../constants/ActionTypes'

export const hash = (state = '', action) => {
  switch (action.type) {
    case SAVE_HASH:
      return action.hash
    default:
      return state
  }
}
