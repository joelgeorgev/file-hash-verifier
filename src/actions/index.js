export const SAVE_ARRAYBUFFER = 'SAVE_ARRAYBUFFER'
export const SAVE_PROGRESS = 'SAVE_PROGRESS'
export const SAVE_LOADING = 'SAVE_LOADING'
export const SAVE_HASH = 'SAVE_HASH'

export const SELECT_FILE = 'SELECT_FILE'
export const SELECT_HASH_TYPE = 'SELECT_HASH_TYPE'
export const CANCEL_FILE_LOAD = 'CANCEL_FILE_LOAD'

export const selectFile = (file) => ({
  type: SELECT_FILE,
  payload: { file }
})

export const selectHashType = (hashType) => ({
  type: SELECT_HASH_TYPE,
  payload: { hashType }
})

export const cancelFileLoad = () => ({
  type: CANCEL_FILE_LOAD
})

export const saveArrayBuffer = (arrayBuffer) => ({
  type: SAVE_ARRAYBUFFER,
  arrayBuffer
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
