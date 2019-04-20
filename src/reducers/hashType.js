import { SAVE_HASH_TYPE } from '../constants/ActionTypes'

export const hashType = (state = '', action) => {
  switch (action.type) {
    case SAVE_HASH_TYPE:
      return action.hashType
    default:
      return state
  }
}
