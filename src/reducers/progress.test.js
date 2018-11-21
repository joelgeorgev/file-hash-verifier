import { progress } from './progress'
import { saveProgress } from '../actions'

describe('progress reducer', () => {
  it('should handle initial state', () => {
    const result = 100
    expect(progress(undefined, {})).toEqual(result)
  })

  it('should handle SAVE_PROGRESS', () => {
    const progressValue = 90
    const result = progressValue
    expect(progress(0, saveProgress(progressValue))).toEqual(result)
  })
})