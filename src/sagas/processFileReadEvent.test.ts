import { runSaga, Saga } from 'redux-saga'

import { processFileReadEvent } from './processFileReadEvent'
import { fileLoaded, fileLoadProgress } from '../actions'

type FileReadEvent = Parameters<typeof processFileReadEvent>[number]

const executeSaga = (dispatch: jest.Mock, event: FileReadEvent) =>
  runSaga({ dispatch }, processFileReadEvent as Saga<any[]>, event)

const arrayBuffer = new ArrayBuffer(1)
const error = new DOMException()
const progress = 100

describe('processFileReadEvent', () => {
  describe('When the event contains the file array buffer', () => {
    let dispatch: jest.Mock

    beforeEach(() => {
      dispatch = jest.fn()

      executeSaga(dispatch, { arrayBuffer })
    })

    test('dispatches an action to save the file array buffer', () => {
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith(fileLoaded(arrayBuffer))
    })
  })

  describe('When the event contains the file read error', () => {
    let consoleSpy: jest.SpyInstance
    let dispatch: jest.Mock

    beforeEach(() => {
      consoleSpy = jest.spyOn(window.console, 'error').mockImplementation()

      dispatch = jest.fn()

      executeSaga(dispatch, { error })
    })

    afterEach(() => {
      consoleSpy.mockRestore()
    })

    test('logs the file read error to the console', () => {
      expect(consoleSpy).toHaveBeenCalledTimes(1)
      expect(consoleSpy).toHaveBeenCalledWith(
        'Error during file read operation: ',
        error
      )
    })
  })

  describe('When the event contains the file read progress', () => {
    let dispatch: jest.Mock

    beforeEach(() => {
      dispatch = jest.fn()

      executeSaga(dispatch, { progress })
    })

    test('dispatches an action to save the file read progress', () => {
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith(fileLoadProgress(progress))
    })
  })

  describe('When the event does NOT contain the file read progress', () => {
    let dispatch: jest.Mock

    beforeEach(() => {
      dispatch = jest.fn()

      executeSaga(dispatch, { progress: undefined })
    })

    test('does NOT dispatch any action', () => {
      expect(dispatch).toHaveBeenCalledTimes(0)
    })
  })
})
