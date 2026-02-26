import { MockedFunction } from 'vitest'
import { call, race, take } from 'redux-saga/effects'

import { loadFile, RaceYield } from './loadFile.ts'
import { createFileReadChannel } from './createFileReadChannel.ts'
import { processFileReadEvent } from './processFileReadEvent.ts'
import {
  CANCEL_FILE_LOAD,
  selectFile,
  cancelFileLoad
} from '../actions/index.ts'

type FileReadEvent = Parameters<typeof processFileReadEvent>[0]
type FileReadChannel = ReturnType<typeof createFileReadChannel>
type NextParameters = FileReadChannel & RaceYield
type Close = FileReadChannel['close']

const createEventChannel = (
  overrides?: Partial<FileReadChannel>
): FileReadChannel => ({
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

    expect(generator.next(fileReadChannel as NextParameters).value).toEqual(
      race({
        channelOutput: take(fileReadChannel),
        cancelFileLoad: take(CANCEL_FILE_LOAD)
      })
    )

    const channelOutput: FileReadEvent = { arrayBuffer: new ArrayBuffer(1) }

    expect(generator.next({ channelOutput } as NextParameters).value).toEqual(
      call(processFileReadEvent, channelOutput)
    )
  })

  describe('When the file load is cancelled', () => {
    test('closes file read channel AND terminates', () => {
      const generator = loadFile(selectFile(file))

      expect(generator.next().value).toEqual(call(createFileReadChannel, file))

      const close: MockedFunction<Close> = vi.fn()
      const fileReadChannel = createEventChannel({ close })

      expect(generator.next(fileReadChannel as NextParameters).value).toEqual(
        race({
          channelOutput: take(fileReadChannel),
          cancelFileLoad: take(CANCEL_FILE_LOAD)
        })
      )

      generator.next({ cancelFileLoad: cancelFileLoad() } as NextParameters)

      expect(close).toHaveBeenCalledTimes(1)
      expect(close).toHaveBeenCalledWith()

      expect(generator.next().done).toEqual(true)
    })
  })
})
