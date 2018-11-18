import {
  SET_FILE, SET_HASH_TYPE, SAVE_FILE, SAVE_ARRAYBUFFER,
  SAVE_HASH_TYPE, SAVE_PROGRESS, SAVE_LOADING, SAVE_HASH
}
  from '../constants/ActionTypes'

// UI actions
export const setFile = (file) => { return { type: SET_FILE, file } }
export const setHashType = (hashType) => { return { type: SET_HASH_TYPE, hashType } }

// Saga actions
export const saveFile = (file) => { return { type: SAVE_FILE, file } }
export const saveArrayBuffer = (arrayBuffer) => { return { type: SAVE_ARRAYBUFFER, arrayBuffer } }
export const saveHashType = (hashType) => { return { type: SAVE_HASH_TYPE, hashType } }
export const saveProgress = (progress) => { return { type: SAVE_PROGRESS, progress } }
export const saveLoading = (loading) => { return { type: SAVE_LOADING, loading } }
export const saveHash = (hash) => { return { type: SAVE_HASH, hash } }