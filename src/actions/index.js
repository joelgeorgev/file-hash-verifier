import {
  SET_FILE,
  SET_HASH_TYPE,
  CANCEL_FILE_READ,
  SAVE_FILE,
  SAVE_ARRAYBUFFER,
  SAVE_HASH_TYPE,
  SAVE_PROGRESS,
  SAVE_LOADING,
  SAVE_HASH
} from '../constants/ActionTypes'

// UI actions
export const setFile = (file) => ({
  type: SET_FILE,
  file
})
export const setHashType = (hashType) => ({
  type: SET_HASH_TYPE,
  hashType
})
export const cancelFileRead = () => ({
  type: CANCEL_FILE_READ
})

// Saga actions
export const saveFile = (file) => ({
  type: SAVE_FILE,
  file
})
export const saveArrayBuffer = (arrayBuffer) => ({
  type: SAVE_ARRAYBUFFER,
  arrayBuffer
})
export const saveHashType = (hashType) => ({
  type: SAVE_HASH_TYPE,
  hashType
})
export const saveProgress = (progress) => ({
  type: SAVE_PROGRESS,
  progress
})
export const saveLoading = (loading) => ({
  type: SAVE_LOADING,
  loading
})
export const saveHash = (hash) => ({
  type: SAVE_HASH,
  hash
})
