import { progress } from './progress'
import { saveProgress } from '../actions'

describe('progress reducer', () => {
  describe('When no action is given', () => {
    test('returns initial state', () => {
      expect(progress(undefined, {})).toEqual(100)
    })
  })

  test('handles SAVE_PROGRESS action', () => {
    const progressValue = 90

    expect(progress(0, saveProgress(progressValue))).toEqual(progressValue)
  })
})
