import { loading } from './loading'
import { saveLoading } from '../actions'

describe('loading reducer', () => {
  it('should handle initial state', () => {
    const result = false
    expect(loading(undefined, {})).toEqual(result)
  })

  it('should handle SAVE_LOADING', () => {
    const loadingState = true
    const result = loadingState
    expect(loading(false, saveLoading(loadingState))).toEqual(result)
  })
})