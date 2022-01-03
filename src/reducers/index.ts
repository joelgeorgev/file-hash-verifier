import * as Actions from '../actions'
import type {
  Action,
  FileName,
  FileSize,
  FileLoadProgress,
  HashType,
  Hash
} from '../types'

interface FileDetails {
  name: FileName
  size: FileSize
}

interface State {
  file: FileDetails | null
  fileLoadProgress: FileLoadProgress | null
  arrayBuffer: ArrayBuffer | null
  hashType: HashType | null
  isCalculatingHash: boolean
  hash: Hash | null
}

const initialState: State = {
  file: null,
  fileLoadProgress: null,
  arrayBuffer: null,
  hashType: null,
  isCalculatingHash: false,
  hash: null
}

const selectFile = (state: State, action: Actions.SelectFileAction): State => {
  const { name, size } = action.payload.file

  return {
    ...state,
    file: { name, size },
    arrayBuffer: initialState.arrayBuffer,
    hash: initialState.hash
  }
}

const fileLoadProgress = (
  state: State,
  action: Actions.FileLoadProgressAction
): State => ({
  ...state,
  fileLoadProgress: action.payload.progress
})

const cancelFileLoad = (state: State): State => ({
  ...state,
  file: initialState.file,
  fileLoadProgress: initialState.fileLoadProgress
})

const fileLoaded = (state: State, action: Actions.FileLoadedAction): State => ({
  ...state,
  arrayBuffer: action.payload.arrayBuffer,
  fileLoadProgress: initialState.fileLoadProgress,
  isCalculatingHash: Boolean(state.hashType)
})

const selectHashType = (
  state: State,
  action: Actions.SelectHashTypeAction
): State => ({
  ...state,
  hashType: action.payload.hashType,
  hash: initialState.hash,
  isCalculatingHash: Boolean(state.arrayBuffer)
})

const hashCalculated = (
  state: State,
  action: Actions.HashCalculatedAction
): State => ({
  ...state,
  isCalculatingHash: initialState.isCalculatingHash,
  hash: action.payload.hash
})

export const reducer = (state: State = initialState, action: Action): State => {
  if (Actions.isSelectFileAction(action)) {
    return selectFile(state, action)
  }
  if (Actions.isFileLoadProgressAction(action)) {
    return fileLoadProgress(state, action)
  }
  if (Actions.isCancelFileLoadAction(action)) {
    return cancelFileLoad(state)
  }
  if (Actions.isFileLoadedAction(action)) {
    return fileLoaded(state, action)
  }
  if (Actions.isSelectHashTypeAction(action)) {
    return selectHashType(state, action)
  }
  if (Actions.isHashCalculatedAction(action)) {
    return hashCalculated(state, action)
  }

  return state
}
