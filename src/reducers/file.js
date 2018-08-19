import { SET_FILE } from '../constants/ActionTypes'

export const file = (state, action) => {
  switch (action.type) {
    case SET_FILE:
      return action.file
    default:
      return state
  }
}