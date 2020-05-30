import { SAVE_ARRAYBUFFER } from '../actions'

export const arrayBuffer = (state = null, action) => {
  switch (action.type) {
    case SAVE_ARRAYBUFFER:
      return action.arrayBuffer
    default:
      return state
  }
}
