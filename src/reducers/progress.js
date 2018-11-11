import { SET_PROGRESS } from '../constants/ActionTypes'

export const progress = (state = 100, action) => {
  switch (action.type) {
    case SET_PROGRESS:
      return action.progress
    default:
      return state
  }
}