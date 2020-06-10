export const SELECT_FILE = 'SELECT_FILE'
export const FILE_LOAD_PROGRESS = 'FILE_LOAD_PROGRESS'
export const CANCEL_FILE_LOAD = 'CANCEL_FILE_LOAD'
export const FILE_LOADED = 'FILE_LOADED'
export const SELECT_HASH_TYPE = 'SELECT_HASH_TYPE'
export const HASH_CALCULATED = 'HASH_CALCULATED'

export const selectFile = (file) => ({
  type: SELECT_FILE,
  payload: { file }
})

export const fileLoadProgress = (progress) => ({
  type: FILE_LOAD_PROGRESS,
  payload: { progress }
})

export const cancelFileLoad = () => ({
  type: CANCEL_FILE_LOAD
})

export const fileLoaded = (arrayBuffer) => ({
  type: FILE_LOADED,
  payload: { arrayBuffer }
})

export const selectHashType = (hashType) => ({
  type: SELECT_HASH_TYPE,
  payload: { hashType }
})

export const hashCalculated = (hash) => ({
  type: HASH_CALCULATED,
  payload: { hash }
})
