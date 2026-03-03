import { configureStore, Tuple } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { MockedFunction } from 'vitest'
import { render, act } from '@testing-library/react'

import { Shell } from './Shell.tsx'
import { FilePicker } from '../FilePicker/FilePicker.tsx'
import { HashSelector } from '../HashSelector/HashSelector.tsx'
import { FileLoader } from '../FileLoader/FileLoader.tsx'
import { FileDetails } from '../FileDetails/FileDetails.tsx'
import { HashLoader } from '../HashLoader/HashLoader.tsx'
import { FileHash } from '../FileHash/FileHash.tsx'
import { HashVerifier } from '../HashVerifier/HashVerifier.tsx'
import { reducer } from '../../reducers/index.ts'

vi.mock('../FilePicker/FilePicker.tsx')
vi.mock('../HashSelector/HashSelector.tsx')
vi.mock('../FileLoader/FileLoader.tsx')
vi.mock('../FileDetails/FileDetails.tsx')
vi.mock('../HashLoader/HashLoader.tsx')
vi.mock('../FileHash/FileHash.tsx')
vi.mock('../HashVerifier/HashVerifier.tsx')

type State = ReturnType<typeof reducer>

const mockFilePicker = FilePicker as MockedFunction<typeof FilePicker>
const mockHashSelector = HashSelector as MockedFunction<typeof HashSelector>
const mockFileLoader = FileLoader as MockedFunction<typeof FileLoader>
const mockFileDetails = FileDetails as MockedFunction<typeof FileDetails>
const mockHashLoader = HashLoader as MockedFunction<typeof HashLoader>
const mockFileHash = FileHash as MockedFunction<typeof FileHash>
const mockHashVerifier = HashVerifier as MockedFunction<typeof HashVerifier>

const createState = (partialState?: Partial<State>): State => ({
  file: null,
  fileLoadProgress: null,
  arrayBuffer: null,
  hashType: null,
  isCalculatingHash: false,
  hash: null,
  ...partialState
})

const renderShell = (state = createState()) => {
  const store = configureStore({
    reducer,
    preloadedState: state,
    middleware() {
      return new Tuple()
    }
  })

  render(
    <Provider store={store}>
      <Shell />
    </Provider>
  )

  return { store }
}

const arrayBuffer = new ArrayBuffer(1)
const file = { name: 'robots.txt', size: 100 }
const hash = 'hash'

describe('Shell', () => {
  test('renders FilePicker', () => {
    const { store } = renderShell()

    expect(mockFilePicker).toHaveBeenCalledTimes(1)

    const filePickerProps = mockFilePicker.mock.calls[0][0]

    expect(filePickerProps).toEqual({
      isDisabled: expect.any(Boolean),
      onSelect: expect.any(Function)
    })

    const file = new File(['Hello World'], 'robots.txt', {
      type: 'text/plain'
    })

    act(() => {
      filePickerProps.onSelect(file)
    })

    expect(store.getState()).toEqual(
      createState({
        file: {
          name: 'robots.txt',
          size: 11
        }
      })
    )
  })

  test('renders HashSelector', () => {
    const state = createState()
    const { store } = renderShell(state)

    expect(mockHashSelector).toHaveBeenCalledTimes(1)

    const hashSelectorProps = mockHashSelector.mock.calls[0][0]

    expect(hashSelectorProps).toEqual({
      hashType: state.hashType,
      isDisabled: expect.any(Boolean),
      onSelect: expect.any(Function)
    })

    const hashType = 'sha-1'

    act(() => {
      hashSelectorProps.onSelect(hashType)
    })

    expect(store.getState()).toEqual(
      createState({
        hashType
      })
    )
  })

  describe.each<[Partial<State>]>([
    [{ fileLoadProgress: null, isCalculatingHash: false }],
    [{ fileLoadProgress: 0, isCalculatingHash: false }]
  ])(
    'When BOTH `fileLoadProgress` and `isCalculatingHash` are FALSY',
    (partialState) => {
      test('renders FilePicker and HashSelector as enabled', () => {
        renderShell(createState(partialState))

        expect(mockFilePicker).toHaveBeenCalledTimes(1)
        expect(mockHashSelector).toHaveBeenCalledTimes(1)

        const filePickerProps = mockFilePicker.mock.calls[0][0]
        const hashSelectorProps = mockHashSelector.mock.calls[0][0]

        expect(filePickerProps.isDisabled).toEqual(false)
        expect(hashSelectorProps.isDisabled).toEqual(false)
      })
    }
  )

  describe.each<[Partial<State>]>([
    [{ fileLoadProgress: null, isCalculatingHash: true }],
    [{ fileLoadProgress: 0, isCalculatingHash: true }],
    [{ fileLoadProgress: 1, isCalculatingHash: false }],
    [{ fileLoadProgress: 1, isCalculatingHash: true }]
  ])(
    'When EITHER `fileLoadProgress` or `isCalculatingHash` is TRUTHY',
    (partialState) => {
      test('renders FilePicker and HashSelector as disabled', () => {
        renderShell(createState(partialState))

        expect(mockFilePicker).toHaveBeenCalledTimes(1)
        expect(mockHashSelector).toHaveBeenCalledTimes(1)

        const filePickerProps = mockFilePicker.mock.calls[0][0]
        const hashSelectorProps = mockHashSelector.mock.calls[0][0]

        expect(filePickerProps.isDisabled).toEqual(true)
        expect(hashSelectorProps.isDisabled).toEqual(true)
      })
    }
  )

  describe('When the file load is in progress', () => {
    test('renders FileLoader', () => {
      const fileLoadProgress = 1
      const { store } = renderShell(createState({ fileLoadProgress }))

      expect(mockFileLoader).toHaveBeenCalledTimes(1)

      const fileLoaderProps = mockFileLoader.mock.calls[0][0]

      expect(fileLoaderProps).toEqual({
        progress: fileLoadProgress,
        onCancel: expect.any(Function)
      })

      act(() => {
        fileLoaderProps.onCancel()
      })

      expect(store.getState()).toEqual(
        createState({
          fileLoadProgress: null
        })
      )
    })
  })

  describe('When the file is loaded', () => {
    test('does NOT render FileLoader', () => {
      renderShell(createState({ fileLoadProgress: null }))

      expect(mockFileLoader).toHaveBeenCalledTimes(0)
    })
  })

  test('renders FileDetails', () => {
    renderShell(
      createState({
        arrayBuffer,
        file
      })
    )

    expect(mockFileDetails).toHaveBeenCalledTimes(1)

    const fileDetailsProps = mockFileDetails.mock.calls[0][0]

    expect(fileDetailsProps).toEqual({
      name: file.name,
      size: file.size
    })
  })

  describe.each<[Partial<State>]>([
    [{ arrayBuffer: null, file }],
    [{ arrayBuffer, file: null }],
    [{ arrayBuffer: null, file: null }]
  ])('When EITHER `arrayBuffer` or `file` is FALSY', (partialState) => {
    test('does NOT render FileDetails', () => {
      renderShell(createState(partialState))

      expect(mockFileDetails).toHaveBeenCalledTimes(0)
    })
  })

  test('renders HashLoader', () => {
    renderShell(
      createState({
        arrayBuffer,
        isCalculatingHash: true
      })
    )

    expect(mockHashLoader).toHaveBeenCalledTimes(1)
  })

  describe.each<[Partial<State>]>([
    [{ arrayBuffer: null, isCalculatingHash: true }],
    [{ arrayBuffer, isCalculatingHash: false }],
    [{ arrayBuffer: null, isCalculatingHash: false }]
  ])(
    'When EITHER `arrayBuffer` or `isCalculatingHash` is FALSY',
    (partialState) => {
      test('does NOT render HashLoader', () => {
        renderShell(createState(partialState))

        expect(mockHashLoader).toHaveBeenCalledTimes(0)
      })
    }
  )

  test('renders FileHash', () => {
    renderShell(
      createState({
        arrayBuffer,
        hash
      })
    )

    expect(mockFileHash).toHaveBeenCalledTimes(1)

    const fileHashProps = mockFileHash.mock.calls[0][0]

    expect(fileHashProps).toEqual({
      hash
    })
  })

  test('renders HashVerifier', () => {
    renderShell(
      createState({
        arrayBuffer,
        hash
      })
    )

    expect(mockHashVerifier).toHaveBeenCalledTimes(1)

    const hashVerifierProps = mockHashVerifier.mock.calls[0][0]

    expect(hashVerifierProps).toEqual({
      hash
    })
  })

  describe.each<[Partial<State>]>([
    [{ arrayBuffer: null, hash }],
    [{ arrayBuffer, hash: null }],
    [{ arrayBuffer: null, hash: null }]
  ])('When EITHER `arrayBuffer` or `hash` is FALSY', (partialState) => {
    test('does NOT render FileHash', () => {
      renderShell(createState(partialState))

      expect(mockFileHash).toHaveBeenCalledTimes(0)
    })

    test('does NOT render HashVerifier', () => {
      renderShell(createState(partialState))

      expect(mockHashVerifier).toHaveBeenCalledTimes(0)
    })
  })
})
