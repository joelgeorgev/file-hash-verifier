import { SET_HASH_TYPE } from '../constants/ActionTypes'

export const hashType = (state = '', action) => {
  switch (action.type) {
    case SET_HASH_TYPE:
      return action.hashType
    default:
      return state
  }
}