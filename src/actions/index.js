import {
  SET_FILE, SET_ARRAYBUFFER, SET_HASH_TYPE,
  SET_PROGRESS, SET_LOADING
}
  from '../constants/ActionTypes'

export const setFile = (file) => { return { type: SET_FILE, file } }
export const setArrayBuffer = (arrayBuffer) => { return { type: SET_ARRAYBUFFER, arrayBuffer } }
export const setHashType = (hashType) => { return { type: SET_HASH_TYPE, hashType } }
export const setProgress = (progress) => { return { type: SET_PROGRESS, progress } }
export const setLoading = (loading) => { return { type: SET_LOADING, loading } }