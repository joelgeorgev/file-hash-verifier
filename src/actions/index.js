// UI actions
export const SET_FILE = 'SET_FILE'
export const SET_HASH_TYPE = 'SET_HASH_TYPE'
export const CANCEL_FILE_READ = 'CANCEL_FILE_READ'

// Saga actions
export const SAVE_FILE = 'SAVE_FILE'
export const SAVE_ARRAYBUFFER = 'SAVE_ARRAYBUFFER'
export const SAVE_HASH_TYPE = 'SAVE_HASH_TYPE'
export const SAVE_PROGRESS = 'SAVE_PROGRESS'
export const SAVE_LOADING = 'SAVE_LOADING'
export const SAVE_HASH = 'SAVE_HASH'

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
