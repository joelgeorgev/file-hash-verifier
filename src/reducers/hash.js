import { SAVE_HASH } from '../actions'

export const hash = (state = '', action) => {
  switch (action.type) {
    case SAVE_HASH:
      return action.hash
    default:
      return state
  }
}
