import { EventChannel } from 'redux-saga'
import { call, race, take } from 'redux-saga/effects'

import { loadFile, RaceYield } from './loadFile'
import { createFileReadChannel, FileReadEvent } from './createFileReadChannel'
import { processFileReadEvent } from './processFileReadEvent'
import { CANCEL_FILE_LOAD, selectFile, cancelFileLoad } from '../actions'

type NextParams = EventChannel<FileReadEvent> & RaceYield
type Close = EventChannel<FileReadEvent>['close']

const createEventChannel = (
  overrides?: Partial<EventChannel<FileReadEvent>>
): EventChannel<FileReadEvent> => ({
  close: () => {},
  flush: () => {},
  take: () => {},
  ...overrides
})

const file = new File(['Hello World'], 'robots.txt', {
  type: 'text/plain'
})

describe('loadFile', () => {
  test('handles file read channel output', () => {
    const generator = loadFile(selectFile(file))

    expect(generator.next().value).toEqual(call(createFileReadChannel, file))

    const fileReadChannel = createEventChannel()

    expect(generator.next(fileReadChannel as NextParams).value).toEqual(
      race({
        channelOutput: take(fileReadChannel),
        cancelFileLoad: take(CANCEL_FILE_LOAD)
      })
    )

    const channelOutput: FileReadEvent = { arrayBuffer: new ArrayBuffer(1) }

    expect(generator.next({ channelOutput } as NextParams).value).toEqual(
      call(processFileReadEvent, channelOutput)
    )
  })

  describe('When the file load is cancelled', () => {
    test('closes file read channel AND terminates', () => {
      const generator = loadFile(selectFile(file))

      expect(generator.next().value).toEqual(call(createFileReadChannel, file))

      const close: jest.MockedFunction<Close> = jest.fn()
      const fileReadChannel = createEventChannel({ close })

      expect(generator.next(fileReadChannel as NextParams).value).toEqual(
        race({
          channelOutput: take(fileReadChannel),
          cancelFileLoad: take(CANCEL_FILE_LOAD)
        })
      )

      generator.next({ cancelFileLoad: cancelFileLoad() } as NextParams)

      expect(close).toHaveBeenCalledTimes(1)
      expect(close).toHaveBeenCalledWith()

      expect(generator.next().done).toEqual(true)
    })
  })
})
