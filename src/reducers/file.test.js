import { file } from './file'
import { saveFile } from '../actions'

describe('file reducer', () => {
  describe('When no action is given', () => {
    test('returns initial state', () => {
      expect(file(undefined, {})).toEqual(null)
    })
  })

  test('handles SAVE_FILE action', () => {
    const inputFile = new File(['Hello World'], 'robots.txt', {
      type: 'text/plain'
    })

    expect(file(null, saveFile(inputFile))).toEqual(inputFile)
  })
})
