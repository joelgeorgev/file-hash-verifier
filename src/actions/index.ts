import type { Action, FileLoadProgress, HashType, Hash } from '../types'

export const SELECT_FILE = 'SELECT_FILE'
export const FILE_LOAD_PROGRESS = 'FILE_LOAD_PROGRESS'
export const CANCEL_FILE_LOAD = 'CANCEL_FILE_LOAD'
export const FILE_LOADED = 'FILE_LOADED'
export const SELECT_HASH_TYPE = 'SELECT_HASH_TYPE'
export const HASH_CALCULATED = 'HASH_CALCULATED'

/* Action Types */
export interface SelectFileAction extends Action {
  type: typeof SELECT_FILE
  payload: { file: File }
}

export interface FileLoadProgressAction extends Action {
  type: typeof FILE_LOAD_PROGRESS
  payload: { progress: FileLoadProgress }
}

export interface CancelFileLoadAction extends Action {
  type: typeof CANCEL_FILE_LOAD
}

export interface FileLoadedAction extends Action {
  type: typeof FILE_LOADED
  payload: { arrayBuffer: ArrayBuffer }
}

export interface SelectHashTypeAction extends Action {
  type: typeof SELECT_HASH_TYPE
  payload: { hashType: HashType }
}

export interface HashCalculatedAction extends Action {
  type: typeof HASH_CALCULATED
  payload: { hash: Hash }
}

/* Action Creators */
export const selectFile = (file: File): SelectFileAction => ({
  type: SELECT_FILE,
  payload: { file }
})

export const fileLoadProgress = (
  progress: FileLoadProgress
): FileLoadProgressAction => ({
  type: FILE_LOAD_PROGRESS,
  payload: { progress }
})

export const cancelFileLoad = (): CancelFileLoadAction => ({
  type: CANCEL_FILE_LOAD
})

export const fileLoaded = (arrayBuffer: ArrayBuffer): FileLoadedAction => ({
  type: FILE_LOADED,
  payload: { arrayBuffer }
})

export const selectHashType = (hashType: HashType): SelectHashTypeAction => ({
  type: SELECT_HASH_TYPE,
  payload: { hashType }
})

export const hashCalculated = (hash: Hash): HashCalculatedAction => ({
  type: HASH_CALCULATED,
  payload: { hash }
})

/* Action Type Guards */
export const isSelectFileAction = (
  action: Action
): action is SelectFileAction => action.type === SELECT_FILE

export const isFileLoadProgressAction = (
  action: Action
): action is FileLoadProgressAction => action.type === FILE_LOAD_PROGRESS

export const isCancelFileLoadAction = (
  action: Action
): action is CancelFileLoadAction => action.type === CANCEL_FILE_LOAD

export const isFileLoadedAction = (
  action: Action
): action is FileLoadedAction => action.type === FILE_LOADED

export const isSelectHashTypeAction = (
  action: Action
): action is SelectHashTypeAction => action.type === SELECT_HASH_TYPE

export const isHashCalculatedAction = (
  action: Action
): action is HashCalculatedAction => action.type === HASH_CALCULATED
