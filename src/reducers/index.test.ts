import { reducer } from '.'
import {
  selectFile,
  fileLoadProgress,
  cancelFileLoad,
  fileLoaded,
  selectHashType,
  hashCalculated
} from '../actions'

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

const file = new File(['Hello World'], 'robots.txt', {
  type: 'text/plain'
})
const progress = 90
const arrayBuffer = new ArrayBuffer(1)
const hashType = 'sha-512'
const hash = 'hash'

describe('reducer', () => {
  test('returns the initial state', () => {
    const prevState = undefined
    const action = { type: 'some action' }
    const newState = reducer(prevState, action)

    expect(newState).toEqual(createState())
  })

  describe('When a file is selected', () => {
    test('returns the file details AND clears any array buffer AND hash', () => {
      const prevState = createState({
        arrayBuffer,
        hash
      })
      const action = selectFile(file)
      const newState = reducer(prevState, action)

      expect(newState).toEqual(
        createState({
          file: { name: file.name, size: file.size },
          arrayBuffer: null,
          hash: null
        })
      )
    })
  })

  describe('When the file load is in progress', () => {
    test('returns the file load progress', () => {
      const prevState = createState({ fileLoadProgress: null })
      const action = fileLoadProgress(progress)
      const newState = reducer(prevState, action)

      expect(newState).toEqual(createState({ fileLoadProgress: progress }))
    })
  })

  describe('When the file load is cancelled', () => {
    test('clears any file AND file load progress', () => {
      const prevState = createState({
        file,
        fileLoadProgress: progress
      })
      const action = cancelFileLoad()
      const newState = reducer(prevState, action)

      expect(newState).toEqual(
        createState({
          file: null,
          fileLoadProgress: null
        })
      )
    })
  })

  describe('When the file is loaded', () => {
    test('returns the array buffer of the file AND clears any file load progress', () => {
      const prevState = createState({
        arrayBuffer: null,
        fileLoadProgress: progress
      })
      const action = fileLoaded(arrayBuffer)
      const newState = reducer(prevState, action)

      expect(newState).toEqual(
        createState({
          arrayBuffer,
          fileLoadProgress: null
        })
      )
    })
  })

  describe('When a hash type is selected', () => {
    test('returns the hash type AND clears any hash', () => {
      const prevState = createState({ hash })
      const action = selectHashType(hashType)
      const newState = reducer(prevState, action)

      expect(newState).toEqual(
        createState({
          hashType,
          hash: null
        })
      )
    })
  })

  describe('Given the file is loaded', () => {
    describe('When a hash type is selected', () => {
      test('enables hash calculation', () => {
        const prevState = createState({ arrayBuffer })
        const action = selectHashType(hashType)
        const newState = reducer(prevState, action)

        expect(newState).toEqual(
          createState({
            arrayBuffer,
            hashType,
            isCalculatingHash: true
          })
        )
      })
    })
  })

  describe('Given a hash type is selected', () => {
    describe('When the file is loaded', () => {
      test('enables hash calculation', () => {
        const prevState = createState({ hashType })
        const action = fileLoaded(arrayBuffer)
        const newState = reducer(prevState, action)

        expect(newState).toEqual(
          createState({
            hashType,
            arrayBuffer,
            isCalculatingHash: true
          })
        )
      })
    })
  })

  describe('When hash is calculated', () => {
    test('disables hash calculation AND returns the hash', () => {
      const prevState = createState({
        isCalculatingHash: true,
        hash: null
      })
      const action = hashCalculated(hash)
      const newState = reducer(prevState, action)

      expect(newState).toEqual(
        createState({
          isCalculatingHash: false,
          hash
        })
      )
    })
  })
})
