import { SAVE_LOADING } from '../constants/ActionTypes'

export const loading = (state = false, action) => {
  switch (action.type) {
    case SAVE_LOADING:
      return action.loading
    default:
      return state
  }
}