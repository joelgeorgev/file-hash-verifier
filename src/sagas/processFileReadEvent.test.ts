import { runSaga, Saga } from 'redux-saga'

import { processFileReadEvent } from './processFileReadEvent'
import { fileLoaded, fileLoadProgress } from '../actions'

type FileReadEvent = Parameters<typeof processFileReadEvent>[number]
type Dispatch = jest.MockedFunction<() => void>

const createDispatch = (): Dispatch => jest.fn()

const executeSaga = (dispatch: Dispatch, event: FileReadEvent) =>
  runSaga({ dispatch }, processFileReadEvent as Saga<any[]>, event).toPromise()

const arrayBuffer = new ArrayBuffer(1)
const error = new DOMException()
const progress = 100

describe('processFileReadEvent', () => {
  describe('When the event contains the file array buffer', () => {
    test('dispatches an action to save the file array buffer', async () => {
      const dispatch = createDispatch()
      await executeSaga(dispatch, { arrayBuffer })

      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith(fileLoaded(arrayBuffer))
    })
  })

  describe('When the event contains the file read error', () => {
    test('logs the file read error to the console', async () => {
      const consoleSpy = jest
        .spyOn(window.console, 'error')
        .mockImplementation()

      const dispatch = createDispatch()
      await executeSaga(dispatch, { error })

      expect(consoleSpy).toHaveBeenCalledTimes(1)
      expect(consoleSpy).toHaveBeenCalledWith(
        'Error during file read operation: ',
        error
      )

      consoleSpy.mockRestore()
    })
  })

  describe('When the event contains the file read progress', () => {
    test('dispatches an action to save the file read progress', async () => {
      const dispatch = createDispatch()
      await executeSaga(dispatch, { progress })

      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith(fileLoadProgress(progress))
    })
  })

  describe('When the event does NOT contain the file read progress', () => {
    test('does NOT dispatch any action', async () => {
      const dispatch = createDispatch()
      await executeSaga(dispatch, { progress: undefined })

      expect(dispatch).toHaveBeenCalledTimes(0)
    })
  })
})
