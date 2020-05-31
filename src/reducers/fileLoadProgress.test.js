import { fileLoadProgress as fileLoadProgressReducer } from './fileLoadProgress'
import { fileLoadProgress, cancelFileLoad, fileLoaded } from '../actions'

const progress = 90

describe('fileLoadProgress reducer', () => {
  test('returns the initial state', () => {
    expect(fileLoadProgressReducer(undefined, {})).toEqual(null)
  })

  test('handles FILE_LOAD_progress action', () => {
    const action = fileLoadProgress(progress)

    expect(fileLoadProgressReducer(null, action)).toEqual(progress)
  })

  test('handles CANCEL_FILE_LOAD action', () => {
    const action = cancelFileLoad()

    expect(fileLoadProgressReducer(progress, action)).toEqual(null)
  })

  test('handles FILE_LOADED action', () => {
    const action = fileLoaded()

    expect(fileLoadProgressReducer(progress, action)).toEqual(null)
  })
})
