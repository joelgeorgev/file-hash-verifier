import { MockedFunction } from 'vitest'
import { render } from '@testing-library/react'

import { Shell } from '.'
import {
  FilePicker,
  HashSelector,
  FileLoader,
  FileDetails,
  HashLoader,
  FileHash,
  HashVerifier
} from '..'
import { useSelector, useDispatch } from '../../hooks'
import { selectFile, cancelFileLoad, selectHashType } from '../../actions'
import type { State } from '../../store'

vi.mock('..')
vi.mock('../../hooks')

const mockFilePicker = FilePicker as MockedFunction<typeof FilePicker>
const mockHashSelector = HashSelector as MockedFunction<typeof HashSelector>
const mockFileLoader = FileLoader as MockedFunction<typeof FileLoader>
const mockFileDetails = FileDetails as MockedFunction<typeof FileDetails>
const mockHashLoader = HashLoader as MockedFunction<typeof HashLoader>
const mockFileHash = FileHash as MockedFunction<typeof FileHash>
const mockHashVerifier = HashVerifier as MockedFunction<typeof HashVerifier>
const mockUseSelector = useSelector as MockedFunction<typeof useSelector>
const mockUseDispatch = useDispatch as MockedFunction<typeof useDispatch>

const createDispatch = () => vi.fn()

const createState = (partialState?: Partial<State>): State => ({
  file: null,
  fileLoadProgress: null,
  arrayBuffer: null,
  hashType: null,
  isCalculatingHash: false,
  hash: null,
  ...partialState
})

const renderShell = () => render(<Shell />)

const arrayBuffer = new ArrayBuffer(1)
const file = { name: 'robots.txt', size: 100 }
const hash = 'hash'

describe('Shell', () => {
  test('renders FilePicker', () => {
    mockUseSelector.mockReturnValue(createState())
    const dispatch = createDispatch()
    mockUseDispatch.mockReturnValue(dispatch)

    renderShell()

    expect(mockFilePicker).toHaveBeenCalledTimes(1)

    const filePickerProps = mockFilePicker.mock.calls[0][0]

    expect(filePickerProps).toEqual({
      isDisabled: expect.any(Boolean),
      onSelect: expect.any(Function)
    })

    const file = new File(['Hello World'], 'robots.txt', {
      type: 'text/plain'
    })
    filePickerProps.onSelect(file)

    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(selectFile(file))
  })

  test('renders HashSelector', () => {
    const state = createState()
    mockUseSelector.mockReturnValue(state)
    const dispatch = createDispatch()
    mockUseDispatch.mockReturnValue(dispatch)

    renderShell()

    expect(mockHashSelector).toHaveBeenCalledTimes(1)

    const hashSelectorProps = mockHashSelector.mock.calls[0][0]

    expect(hashSelectorProps).toEqual({
      hashType: state.hashType,
      isDisabled: expect.any(Boolean),
      onSelect: expect.any(Function)
    })

    const hashType = 'sha-1'
    hashSelectorProps.onSelect(hashType)

    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(selectHashType(hashType))
  })

  describe.each<[Partial<State>]>([
    [{ fileLoadProgress: null, isCalculatingHash: false }],
    [{ fileLoadProgress: 0, isCalculatingHash: false }]
  ])(
    'When BOTH `fileLoadProgress` and `isCalculatingHash` are FALSY',
    (partialState) => {
      test('renders FilePicker and HashSelector as enabled', () => {
        mockUseSelector.mockReturnValue(createState(partialState))

        renderShell()

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
        mockUseSelector.mockReturnValue(createState(partialState))

        renderShell()

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
      mockUseSelector.mockReturnValue(createState({ fileLoadProgress }))
      const dispatch = createDispatch()
      mockUseDispatch.mockReturnValue(dispatch)

      renderShell()

      expect(mockFileLoader).toHaveBeenCalledTimes(1)

      const fileLoaderProps = mockFileLoader.mock.calls[0][0]

      expect(fileLoaderProps).toEqual({
        progress: fileLoadProgress,
        onCancel: expect.any(Function)
      })

      fileLoaderProps.onCancel()

      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith(cancelFileLoad())
    })
  })

  describe('When the file is loaded', () => {
    test('does NOT render FileLoader', () => {
      mockUseSelector.mockReturnValue(createState({ fileLoadProgress: null }))

      renderShell()

      expect(mockFileLoader).toHaveBeenCalledTimes(0)
    })
  })

  test('renders FileDetails', () => {
    mockUseSelector.mockReturnValue(
      createState({
        arrayBuffer,
        file
      })
    )

    renderShell()

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
      mockUseSelector.mockReturnValue(createState(partialState))

      renderShell()

      expect(mockFileDetails).toHaveBeenCalledTimes(0)
    })
  })

  test('renders HashLoader', () => {
    mockUseSelector.mockReturnValue(
      createState({
        arrayBuffer,
        isCalculatingHash: true
      })
    )

    renderShell()

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
        mockUseSelector.mockReturnValue(createState(partialState))

        renderShell()

        expect(mockHashLoader).toHaveBeenCalledTimes(0)
      })
    }
  )

  test('renders FileHash', () => {
    mockUseSelector.mockReturnValue(
      createState({
        arrayBuffer,
        hash
      })
    )

    renderShell()

    expect(mockFileHash).toHaveBeenCalledTimes(1)

    const fileHashProps = mockFileHash.mock.calls[0][0]

    expect(fileHashProps).toEqual({
      hash
    })
  })

  test('renders HashVerifier', () => {
    mockUseSelector.mockReturnValue(
      createState({
        arrayBuffer,
        hash
      })
    )

    renderShell()

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
      mockUseSelector.mockReturnValue(createState(partialState))

      renderShell()

      expect(mockFileHash).toHaveBeenCalledTimes(0)
    })

    test('does NOT render HashVerifier', () => {
      mockUseSelector.mockReturnValue(createState(partialState))

      renderShell()

      expect(mockHashVerifier).toHaveBeenCalledTimes(0)
    })
  })
})
