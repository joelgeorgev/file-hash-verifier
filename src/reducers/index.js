import { combineReducers } from 'redux'

import { file } from './file'
import { arrayBuffer } from './arrayBuffer'
import { hashType } from './hashType'
import { fileLoadProgress } from './fileLoadProgress'
import { isCalculatingHash } from './isCalculatingHash'
import { hash } from './hash'

export const rootReducer = combineReducers({
  file,
  arrayBuffer,
  hashType,
  fileLoadProgress,
  isCalculatingHash,
  hash
})

// Selectors
export const getFile = (state) => state.file
export const getArrayBuffer = (state) => state.arrayBuffer
export const getHashType = (state) => state.hashType
export const getFileLoadProgress = (state) => state.fileLoadProgress
export const getCalculatingHash = (state) => state.isCalculatingHash
export const getHash = (state) => state.hash
