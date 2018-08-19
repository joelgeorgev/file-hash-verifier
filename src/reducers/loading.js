import { SET_LOADING } from '../constants/ActionTypes'

export const loading = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.loading
    default:
      return state
  }
}