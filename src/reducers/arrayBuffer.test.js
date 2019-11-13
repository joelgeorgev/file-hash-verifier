import { arrayBuffer } from './arrayBuffer'
import { saveArrayBuffer } from '../actions'

describe('arrayBuffer reducer', () => {
  describe('When no action is given', () => {
    test('returns initial state', () => {
      expect(arrayBuffer(undefined, {})).toEqual(null)
    })
  })

  test('handles SAVE_ARRAYBUFFER action', () => {
    const inputArrayBuffer = new ArrayBuffer(8)

    expect(arrayBuffer(null, saveArrayBuffer(inputArrayBuffer))).toEqual(
      inputArrayBuffer
    )
  })
})
