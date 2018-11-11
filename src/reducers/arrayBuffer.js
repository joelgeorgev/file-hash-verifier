import { SET_ARRAYBUFFER } from '../constants/ActionTypes'

export const arrayBuffer = (state = null, action) => {
  switch (action.type) {
    case SET_ARRAYBUFFER:
      return action.arrayBuffer
    default:
      return state
  }
}