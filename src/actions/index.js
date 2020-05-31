export const SELECT_FILE = 'SELECT_FILE'
export const SELECT_HASH_TYPE = 'SELECT_HASH_TYPE'
export const CANCEL_FILE_LOAD = 'CANCEL_FILE_LOAD'
export const FILE_LOADED = 'FILE_LOADED'
export const FILE_LOAD_STATUS = 'FILE_LOAD_STATUS'
export const HASH_CALCULATION_STARTED = 'HASH_CALCULATION_STARTED'
export const HASH_CALCULATED = 'HASH_CALCULATED'

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

export const fileLoaded = (arrayBuffer) => ({
  type: FILE_LOADED,
  payload: { arrayBuffer }
})

export const fileLoadStatus = (status) => ({
  type: FILE_LOAD_STATUS,
  payload: { status }
})

export const hashCalculationStarted = () => ({
  type: HASH_CALCULATION_STARTED
})

export const hashCalculated = (hash) => ({
  type: HASH_CALCULATED,
  payload: { hash }
})
