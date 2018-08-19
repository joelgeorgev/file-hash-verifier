import { combineReducers } from 'redux'

import { file } from './file'
import { arrayBuffer } from './arrayBuffer'
import { hashType } from './hashType'
import { progress } from './progress'
import { loading } from './loading'

export const rootReducer = combineReducers({
  file,
  arrayBuffer,
  hashType,
  progress,
  loading
})