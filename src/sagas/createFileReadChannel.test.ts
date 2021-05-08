import { eventChannel, END, Subscribe } from 'redux-saga'

import { createFileReadChannel, FileReadEvent } from './createFileReadChannel'
import { getFileReader } from '../utils'

jest.mock('redux-saga')
jest.mock('../utils')

const mockEventChannel = eventChannel as jest.MockedFunction<
  typeof eventChannel
>
const mockGetFileReader = getFileReader as jest.Mock

interface MockFileReader {
  readyState: 0 | 1 | 2
  result: ArrayBuffer | null
  error: DOMException | null
  onload: () => void
  onprogress: (event: { loaded: number; total: number }) => void
  onerror: () => void
  readAsArrayBuffer: () => void
  abort: () => void
}

const createMockFileReader = (
  overrides?: Partial<MockFileReader>
): MockFileReader => ({
  readyState: 0,
  result: null,
  error: null,
  onload: () => {},
  onprogress: () => {},
  onerror: () => {},
  readAsArrayBuffer: () => {},
  abort: () => {},
  ...overrides
})

type Subscriber = Subscribe<FileReadEvent>
type Emitter = (input: FileReadEvent | END) => void

const createEmitter = (): jest.MockedFunction<Emitter> => jest.fn()

const file = new File(['Hello World'], 'robots.txt', {
  type: 'text/plain'
})

describe('createFileReadChannel', () => {
  test('passes a subscriber function to `eventChannel`', () => {
    createFileReadChannel(file)

    expect(mockEventChannel).toHaveBeenCalledTimes(1)
    expect(mockEventChannel).toHaveBeenCalledWith(expect.any(Function))
  })

  describe('When the subscriber function is invoked', () => {
    test('invokes function to read file as array buffer', () => {
      const readAsArrayBuffer: jest.MockedFunction<
        MockFileReader['readAsArrayBuffer']
      > = jest.fn()
      const mockFileReader = createMockFileReader({ readAsArrayBuffer })
      mockGetFileReader.mockReturnValue(mockFileReader)

      createFileReadChannel(file)

      const subscriber = mockEventChannel.mock.calls[0][0] as Subscriber
      subscriber(() => {})

      expect(mockGetFileReader).toHaveBeenCalledTimes(1)
      expect(mockGetFileReader).toHaveBeenCalledWith()

      expect(readAsArrayBuffer).toHaveBeenCalledTimes(1)
      expect(readAsArrayBuffer).toHaveBeenCalledWith(file)
    })
  })

  describe('When the file read is complete', () => {
    test('invokes the emitter function with the file array buffer', () => {
      const arrayBuffer = new ArrayBuffer(1)
      const mockFileReader = createMockFileReader({ result: arrayBuffer })
      mockGetFileReader.mockReturnValue(mockFileReader)

      createFileReadChannel(file)

      const subscriber = mockEventChannel.mock.calls[0][0] as Subscriber

      const emitter = createEmitter()
      subscriber(emitter)

      mockFileReader.onload()

      expect(emitter).toHaveBeenCalledTimes(2)
      expect(emitter).toHaveBeenNthCalledWith(1, { arrayBuffer })
      expect(emitter).toHaveBeenNthCalledWith(2, END)
    })
  })

  describe('When the file read is in progress', () => {
    test('invokes the emitter function with the file read progress', () => {
      const mockFileReader = createMockFileReader()
      mockGetFileReader.mockReturnValue(mockFileReader)

      createFileReadChannel(file)

      const subscriber = mockEventChannel.mock.calls[0][0] as Subscriber

      const emitter = createEmitter()
      subscriber(emitter)

      const event = { loaded: 5, total: 10 }
      mockFileReader.onprogress(event)

      expect(emitter).toHaveBeenCalledTimes(1)
      expect(emitter).toHaveBeenCalledWith({ progress: 50 })
    })
  })

  describe('When the file read fails', () => {
    test('invokes the emitter function with the file read error', () => {
      const error = new DOMException()
      const mockFileReader = createMockFileReader({ error })
      mockGetFileReader.mockReturnValue(mockFileReader)

      createFileReadChannel(file)

      const subscriber = mockEventChannel.mock.calls[0][0] as Subscriber

      const emitter = createEmitter()
      subscriber(emitter)

      mockFileReader.onerror()

      expect(emitter).toHaveBeenCalledTimes(2)
      expect(emitter).toHaveBeenNthCalledWith(1, { error })
      expect(emitter).toHaveBeenNthCalledWith(2, END)
    })
  })

  describe('When the subscriber function returns', () => {
    describe('And the file read is in progress', () => {
      test('invokes function to abort file read', () => {
        const readyState = 1
        const abort: jest.MockedFunction<MockFileReader['abort']> = jest.fn()
        const mockFileReader = createMockFileReader({ readyState, abort })
        mockGetFileReader.mockReturnValue(mockFileReader)

        createFileReadChannel(file)

        const subscriber = mockEventChannel.mock.calls[0][0] as Subscriber
        const unsubscribe = subscriber(() => {})

        unsubscribe()

        expect(abort).toHaveBeenCalledTimes(1)
      })
    })

    describe.each<MockFileReader['readyState'][]>([[0, 2]])(
      'And the file read is NOT in progress',
      (readyState) => {
        test('does NOT invoke function to abort file read', () => {
          const abort: jest.MockedFunction<MockFileReader['abort']> = jest.fn()
          const mockFileReader = createMockFileReader({ readyState, abort })
          mockGetFileReader.mockReturnValue(mockFileReader)

          createFileReadChannel(file)

          const subscriber = mockEventChannel.mock.calls[0][0] as Subscriber
          const unsubscribe = subscriber(() => {})

          unsubscribe()

          expect(abort).toHaveBeenCalledTimes(0)
        })
      }
    )
  })
})
