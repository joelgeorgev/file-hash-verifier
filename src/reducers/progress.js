import { SAVE_PROGRESS } from '../actions'

export const progress = (state = 100, action) => {
  switch (action.type) {
    case SAVE_PROGRESS:
      return action.progress
    default:
      return state
  }
}
