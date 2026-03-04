import { configureStore, Tuple } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Shell } from './Shell.tsx'
import { reducer } from '../../reducers/index.ts'

type State = ReturnType<typeof reducer>

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

const findFilePicker = (): HTMLInputElement =>
  screen.getByLabelText('Click to pick a file.')
const findFieldSet = (): HTMLFieldSetElement => screen.getByRole('group')
const findRadioButtons = (): HTMLInputElement[] => screen.getAllByRole('radio')
const findProgressBar = (): HTMLProgressElement =>
  screen.getByRole('progressbar')
const queryProgressBar = () => screen.queryByRole('progressbar')
const findCancelButton = (): HTMLButtonElement => screen.getByRole('button')

const arrayBuffer = new ArrayBuffer(1)
const file = { name: 'robots.txt', size: 100 }
const hash = 'hash'

describe('Shell', () => {
  test('renders FilePicker', async () => {
    const { store } = renderShell()

    const filePicker = findFilePicker()

    expect(filePicker).toBeInTheDocument()

    const file = new File(['Hello World'], 'robots.txt', {
      type: 'text/plain'
    })
    const user = userEvent.setup()
    await user.upload(filePicker, file)

    expect(store.getState()).toEqual(
      createState({
        file: {
          name: 'robots.txt',
          size: 11
        }
      })
    )
  })

  test('renders HashSelector', async () => {
    const state = createState({ hashType: 'sha-1' })
    const { store } = renderShell(state)

    const radioButtons = findRadioButtons()

    expect(radioButtons[0]).toBeChecked()
    expect(radioButtons[1]).not.toBeChecked()

    const user = userEvent.setup()
    await user.click(radioButtons[1])

    expect(store.getState()).toEqual(
      createState({
        hashType: 'sha-256'
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

        expect(findFilePicker()).toBeEnabled()
        expect(findFieldSet()).toBeEnabled()
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

        expect(findFilePicker()).toBeDisabled()
        expect(findFieldSet()).toBeDisabled()
      })
    }
  )

  describe('When the file load is in progress', () => {
    test('renders FileLoader', async () => {
      const fileLoadProgress = 1
      const { store } = renderShell(createState({ fileLoadProgress }))

      expect(findProgressBar()).toHaveValue(fileLoadProgress)

      const user = userEvent.setup()
      await user.click(findCancelButton())

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

      expect(queryProgressBar()).not.toBeInTheDocument()
    })
  })

  test('renders FileDetails', () => {
    renderShell(
      createState({
        arrayBuffer,
        file
      })
    )

    expect(screen.getByText(file.name)).toBeInTheDocument()
    expect(screen.getByText('100 bytes')).toBeInTheDocument()
  })

  describe.each<[Partial<State>]>([
    [{ arrayBuffer: null, file }],
    [{ arrayBuffer, file: null }],
    [{ arrayBuffer: null, file: null }]
  ])('When EITHER `arrayBuffer` or `file` is FALSY', (partialState) => {
    test('does NOT render FileDetails', () => {
      renderShell(createState(partialState))

      expect(screen.queryByText(file.name)).not.toBeInTheDocument()
    })
  })

  test('renders HashLoader', () => {
    renderShell(
      createState({
        arrayBuffer,
        isCalculatingHash: true
      })
    )

    expect(screen.getByText('Calculating Hash...')).toBeInTheDocument()
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

        expect(
          screen.queryByText('Calculating Hash...')
        ).not.toBeInTheDocument()
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

    expect(screen.getByLabelText('Hash:')).toHaveValue(hash)
  })

  test('renders HashVerifier', () => {
    renderShell(
      createState({
        arrayBuffer,
        hash
      })
    )

    expect(screen.getByLabelText('Compare with:')).toBeInTheDocument()
  })

  describe.each<[Partial<State>]>([
    [{ arrayBuffer: null, hash }],
    [{ arrayBuffer, hash: null }],
    [{ arrayBuffer: null, hash: null }]
  ])('When EITHER `arrayBuffer` or `hash` is FALSY', (partialState) => {
    test('does NOT render FileHash', () => {
      renderShell(createState(partialState))

      expect(screen.queryByLabelText('Hash:')).not.toBeInTheDocument()
    })

    test('does NOT render HashVerifier', () => {
      renderShell(createState(partialState))

      expect(screen.queryByLabelText('Compare with:')).not.toBeInTheDocument()
    })
  })
})
