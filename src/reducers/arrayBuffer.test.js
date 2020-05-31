import { arrayBuffer } from './arrayBuffer'
import { fileLoaded, selectFile } from '../actions'

const someArrayBuffer = new ArrayBuffer(8)

describe('arrayBuffer reducer', () => {
  test('returns the initial state', () => {
    expect(arrayBuffer(undefined, {})).toEqual(null)
  })

  test('handles FILE_LOADED action', () => {
    const action = fileLoaded(someArrayBuffer)

    expect(arrayBuffer(null, action)).toEqual(someArrayBuffer)
  })

  test('handles SELECT_FILE action', () => {
    const action = selectFile()

    expect(arrayBuffer(someArrayBuffer, action)).toEqual(null)
  })
})
