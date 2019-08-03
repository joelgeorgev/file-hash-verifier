import { combineReducers } from 'redux'

import { file } from './file'
import { arrayBuffer } from './arrayBuffer'
import { hashType } from './hashType'
import { progress } from './progress'
import { loading } from './loading'
import { hash } from './hash'

export const rootReducer = combineReducers({
  file,
  arrayBuffer,
  hashType,
  progress,
  loading,
  hash
})

// Selectors
export const getFile = (state) => state.file
export const getArrayBuffer = (state) => state.arrayBuffer
export const getHashType = (state) => state.hashType
export const getProgress = (state) => state.progress
export const getLoading = (state) => state.loading
export const getHash = (state) => state.hash
