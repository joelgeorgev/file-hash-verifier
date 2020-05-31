import { fileLoadStatus as fileLoadStatusReducer } from './fileLoadStatus'
import { fileLoadStatus, cancelFileLoad, fileLoaded } from '../actions'

const status = 90

describe('fileLoadStatus reducer', () => {
  test('returns the initial state', () => {
    expect(fileLoadStatusReducer(undefined, {})).toEqual(null)
  })

  test('handles FILE_LOAD_STATUS action', () => {
    const action = fileLoadStatus(status)

    expect(fileLoadStatusReducer(null, action)).toEqual(status)
  })

  test('handles CANCEL_FILE_LOAD action', () => {
    const action = cancelFileLoad()

    expect(fileLoadStatusReducer(status, action)).toEqual(null)
  })

  test('handles FILE_LOADED action', () => {
    const action = fileLoaded()

    expect(fileLoadStatusReducer(status, action)).toEqual(null)
  })
})
