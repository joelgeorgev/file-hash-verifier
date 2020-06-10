import {
  SELECT_FILE,
  FILE_LOAD_PROGRESS,
  CANCEL_FILE_LOAD,
  FILE_LOADED,
  SELECT_HASH_TYPE,
  HASH_CALCULATED
} from '../actions'

const initialState = {
  file: null,
  fileLoadProgress: null,
  arrayBuffer: null,
  hashType: null,
  isCalculatingHash: false,
  hash: null
}

const selectFile = (state, { payload }) => ({
  ...state,
  file: payload.file,
  arrayBuffer: initialState.arrayBuffer,
  hash: initialState.hash
})

const fileLoadProgress = (state, { payload }) => ({
  ...state,
  fileLoadProgress: payload.progress
})

const cancelFileLoad = (state) => ({
  ...state,
  file: initialState.file,
  fileLoadProgress: initialState.fileLoadProgress
})

const fileLoaded = (state, { payload }) => ({
  ...state,
  arrayBuffer: payload.arrayBuffer,
  fileLoadProgress: initialState.fileLoadProgress,
  isCalculatingHash: state.hashType ? true : false
})

const selectHashType = (state, { payload }) => ({
  ...state,
  hashType: payload.hashType,
  hash: initialState.hash,
  isCalculatingHash: state.arrayBuffer ? true : false
})

const hashCalculated = (state, { payload }) => ({
  ...state,
  isCalculatingHash: initialState.isCalculatingHash,
  hash: payload.hash
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FILE:
      return selectFile(state, action)
    case FILE_LOAD_PROGRESS:
      return fileLoadProgress(state, action)
    case CANCEL_FILE_LOAD:
      return cancelFileLoad(state)
    case FILE_LOADED:
      return fileLoaded(state, action)
    case SELECT_HASH_TYPE:
      return selectHashType(state, action)
    case HASH_CALCULATED:
      return hashCalculated(state, action)
    default:
      return state
  }
}

export const getFile = (state) => state.file
export const getFileLoadProgress = (state) => state.fileLoadProgress
export const getArrayBuffer = (state) => state.arrayBuffer
export const getHashType = (state) => state.hashType
export const getCalculatingHash = (state) => state.isCalculatingHash
export const getHash = (state) => state.hash
