import { file } from './file'
import { selectFile, cancelFileLoad } from '../actions'

const someFile = new File(['Hello World'], 'robots.txt', {
  type: 'text/plain'
})

describe('file reducer', () => {
  test('returns the initial state', () => {
    expect(file(undefined, {})).toEqual(null)
  })

  test('handles SELECT_FILE action', () => {
    const action = selectFile(someFile)

    expect(file(null, action)).toEqual(someFile)
  })

  test('handles CANCEL_FILE_LOAD action', () => {
    const action = cancelFileLoad()

    expect(file(someFile, action)).toEqual(null)
  })
})
