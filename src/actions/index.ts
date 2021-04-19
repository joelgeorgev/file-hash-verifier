import { AnyAction } from 'redux'

export const SELECT_FILE = 'SELECT_FILE'
export const FILE_LOAD_PROGRESS = 'FILE_LOAD_PROGRESS'
export const CANCEL_FILE_LOAD = 'CANCEL_FILE_LOAD'
export const FILE_LOADED = 'FILE_LOADED'
export const SELECT_HASH_TYPE = 'SELECT_HASH_TYPE'
export const HASH_CALCULATED = 'HASH_CALCULATED'

/* Action Types */
export interface SelectFileAction extends AnyAction {
  type: typeof SELECT_FILE
  payload: { file: File }
}

export interface FileLoadProgressAction extends AnyAction {
  type: typeof FILE_LOAD_PROGRESS
  payload: { progress: number }
}

export interface CancelFileLoadAction extends AnyAction {
  type: typeof CANCEL_FILE_LOAD
}

export interface FileLoadedAction extends AnyAction {
  type: typeof FILE_LOADED
  payload: { arrayBuffer: ArrayBuffer }
}

export interface SelectHashTypeAction extends AnyAction {
  type: typeof SELECT_HASH_TYPE
  payload: { hashType: string }
}

export interface HashCalculatedAction extends AnyAction {
  type: typeof HASH_CALCULATED
  payload: { hash: string }
}

/* Action Creators */
export const selectFile = (file: File): SelectFileAction => ({
  type: SELECT_FILE,
  payload: { file }
})

export const fileLoadProgress = (progress: number): FileLoadProgressAction => ({
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

export const selectHashType = (hashType: string): SelectHashTypeAction => ({
  type: SELECT_HASH_TYPE,
  payload: { hashType }
})

export const hashCalculated = (hash: string): HashCalculatedAction => ({
  type: HASH_CALCULATED,
  payload: { hash }
})

/* Action Type Guards */
export const isSelectFileAction = (
  action: AnyAction
): action is SelectFileAction => action.type === SELECT_FILE

export const isFileLoadProgressAction = (
  action: AnyAction
): action is FileLoadProgressAction => action.type === FILE_LOAD_PROGRESS

export const isCancelFileLoadAction = (
  action: AnyAction
): action is CancelFileLoadAction => action.type === CANCEL_FILE_LOAD

export const isFileLoadedAction = (
  action: AnyAction
): action is FileLoadedAction => action.type === FILE_LOADED

export const isSelectHashTypeAction = (
  action: AnyAction
): action is SelectHashTypeAction => action.type === SELECT_HASH_TYPE

export const isHashCalculatedAction = (
  action: AnyAction
): action is HashCalculatedAction => action.type === HASH_CALCULATED
