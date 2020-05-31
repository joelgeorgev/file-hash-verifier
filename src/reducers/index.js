import { combineReducers } from 'redux'

import { file } from './file'
import { arrayBuffer } from './arrayBuffer'
import { hashType } from './hashType'
import { fileLoadStatus } from './fileLoadStatus'
import { loading } from './loading'
import { hash } from './hash'

export const rootReducer = combineReducers({
  file,
  arrayBuffer,
  hashType,
  fileLoadStatus,
  loading,
  hash
})

// Selectors
export const getFile = (state) => state.file
export const getArrayBuffer = (state) => state.arrayBuffer
export const getHashType = (state) => state.hashType
export const getFileLoadStatus = (state) => state.fileLoadStatus
export const getLoading = (state) => state.loading
export const getHash = (state) => state.hash
