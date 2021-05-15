import { render, screen, fireEvent } from '@testing-library/react'

import { Shell } from '.'
import { useSelector, useDispatch } from '../../hooks'
import { selectFile, selectHashType, cancelFileLoad } from '../../actions'
import type { State } from '../../store'

jest.mock('../../hooks')

type Dispatch = ReturnType<typeof useDispatch>

const createDispatch = (): jest.MockedFunction<Dispatch> => jest.fn()

const mockUseSelector = useSelector as jest.MockedFunction<typeof useSelector>
const mockUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>

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

const FILE_PICKER = 'Click to pick a file.'
const FILE_LOADER = 'Loading file:'
const CANCEL_FILE_LOAD = 'Cancel'
const HASH_LOADER = 'Calculating Hash...'
const FILE_HASH = 'Hash:'
const HASH_VERIFIER = 'Compare with:'

const findRadioButtons = (): HTMLInputElement[] =>
  screen.getAllByRole('radio') as HTMLInputElement[]
const findLabel = (label: string): HTMLLabelElement =>
  screen.getByLabelText(label) as HTMLLabelElement
const queryLabel = (label: string): HTMLLabelElement =>
  screen.queryByLabelText(label) as HTMLLabelElement

const file = new File(['Hello World'], 'robots.txt', {
  type: 'text/plain'
})
const progress = 90
const arrayBuffer = new ArrayBuffer(1)
const hash = 'hash'

describe('Shell', () => {
  test('renders a file picker', () => {
    mockUseSelector.mockImplementation(() => createState())

    renderShell()

    expect(findLabel(FILE_PICKER)).toBeDefined()
  })

  test('dispatches an action on selecting a file', () => {
    mockUseSelector.mockImplementation(() => createState())
    const dispatch = createDispatch()
    mockUseDispatch.mockImplementation(() => dispatch)

    renderShell()

    fireEvent.change(findLabel(FILE_PICKER), { target: { files: [file] } })

    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(selectFile(file))
  })

  test('renders a hash selector', () => {
    mockUseSelector.mockImplementation(() => createState())

    renderShell()

    const radioButtons = findRadioButtons()

    expect(radioButtons).toBeDefined()
    expect(radioButtons.length).toEqual(4)
  })

  test('dispatches an action on selecting a hash type', () => {
    mockUseSelector.mockImplementation(() => createState())
    const dispatch = createDispatch()
    mockUseDispatch.mockImplementation(() => dispatch)

    renderShell()

    fireEvent.click(findRadioButtons()[0])

    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(selectHashType('sha-1'))
  })

  describe('When the file load is in progress', () => {
    test('renders a file loader', () => {
      mockUseSelector.mockImplementation(() =>
        createState({ fileLoadProgress: progress })
      )

      renderShell()

      expect(findLabel(FILE_LOADER)).toBeDefined()
    })
  })

  describe('When the file is loaded', () => {
    test('does NOT render a file loader', () => {
      mockUseSelector.mockImplementation(() =>
        createState({ fileLoadProgress: null })
      )

      renderShell()

      expect(queryLabel(FILE_LOADER)).toEqual(null)
    })
  })

  test('dispatches an action to cancel file load', () => {
    mockUseSelector.mockImplementation(() =>
      createState({ fileLoadProgress: progress })
    )
    const dispatch = createDispatch()
    mockUseDispatch.mockImplementation(() => dispatch)

    renderShell()

    fireEvent.click(screen.getByText(CANCEL_FILE_LOAD))

    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(cancelFileLoad())
  })

  test('renders file details', () => {
    mockUseSelector.mockImplementation(() =>
      createState({
        arrayBuffer,
        file: { name: 'robots.txt', size: 100 }
      })
    )

    renderShell()

    expect(screen.getByText('robots.txt')).toBeDefined()
    expect(screen.getByText('100 bytes')).toBeDefined()
  })

  describe('When the hash calculation is enabled', () => {
    test('renders a hash loader', () => {
      mockUseSelector.mockImplementation(() =>
        createState({ arrayBuffer, isCalculatingHash: true })
      )

      renderShell()

      expect(screen.getByText(HASH_LOADER)).toBeDefined()
    })
  })

  describe('When the hash calculation is disabled', () => {
    test('does NOT render a hash loader', () => {
      mockUseSelector.mockImplementation(() =>
        createState({ arrayBuffer, isCalculatingHash: false })
      )

      renderShell()

      expect(screen.queryByText(HASH_LOADER)).toEqual(null)
    })
  })

  describe('When the file hash is available', () => {
    test('renders the file hash', () => {
      mockUseSelector.mockImplementation(() =>
        createState({ arrayBuffer, hash })
      )

      renderShell()

      expect(findLabel(FILE_HASH)).toBeDefined()
    })

    test('renders the hash verifier', () => {
      mockUseSelector.mockImplementation(() =>
        createState({ arrayBuffer, hash })
      )

      renderShell()

      expect(findLabel(HASH_VERIFIER)).toBeDefined()
    })
  })

  describe('When the file hash is NOT available', () => {
    test('does NOT render the file hash', () => {
      mockUseSelector.mockImplementation(() =>
        createState({ arrayBuffer, hash: null })
      )

      renderShell()

      expect(queryLabel(FILE_HASH)).toEqual(null)
    })

    test('does NOT render the hash verifier', () => {
      mockUseSelector.mockImplementation(() =>
        createState({ arrayBuffer, hash: null })
      )

      renderShell()

      expect(queryLabel(HASH_VERIFIER)).toEqual(null)
    })
  })
})
