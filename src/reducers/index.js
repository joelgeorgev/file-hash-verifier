import { combineReducers } from 'redux'

import { file } from './file'
import { arrayBuffer } from './arrayBuffer'
import { hashType } from './hashType'
import { fileLoadStatus } from './fileLoadStatus'
import { calculatingHash } from './calculatingHash'
import { hash } from './hash'

export const rootReducer = combineReducers({
  file,
  arrayBuffer,
  hashType,
  fileLoadStatus,
  calculatingHash,
  hash
})

// Selectors
export const getFile = (state) => state.file
export const getArrayBuffer = (state) => state.arrayBuffer
export const getHashType = (state) => state.hashType
export const getFileLoadStatus = (state) => state.fileLoadStatus
export const isCalculatingHash = (state) => state.calculatingHash
export const getHash = (state) => state.hash
