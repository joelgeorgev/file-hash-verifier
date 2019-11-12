import { loading } from './loading'
import { saveLoading } from '../actions'

describe('loading reducer', () => {
  describe('When no action is given', () => {
    test('returns initial state', () => {
      expect(loading(undefined, {})).toEqual(false)
    })
  })

  test('handles SAVE_LOADING action', () => {
    const loadingState = true

    expect(loading(false, saveLoading(loadingState))).toEqual(loadingState)
  })
})
