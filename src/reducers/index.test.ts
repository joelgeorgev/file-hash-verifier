import { reducer, State } from '.'
import {
  selectFile,
  fileLoadProgress,
  cancelFileLoad,
  fileLoaded,
  selectHashType,
  hashCalculated
} from '../actions'

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
const progress = 100
const arrayBuffer = new ArrayBuffer(8)
const hashType = 'sha-512'
const hash = 'hash'

describe('reducer', () => {
  test('returns the initial state', () => {
    expect(reducer(undefined, { type: 'some action' })).toEqual(createState())
  })

  describe('When a file is selected', () => {
    let newState: State

    beforeEach(() => {
      const prevState = createState({
        arrayBuffer,
        hash
      })
      const action = selectFile(file)

      newState = reducer(prevState, action)
    })

    test('returns the file AND clears any array buffer AND hash', () => {
      expect(newState).toEqual(
        createState({
          file,
          arrayBuffer: null,
          hash: null
        })
      )
    })
  })

  describe('When the file load is in progress', () => {
    let newState: State

    beforeEach(() => {
      const prevState = createState({ fileLoadProgress: null })
      const action = fileLoadProgress(progress)

      newState = reducer(prevState, action)
    })

    test('returns the file load progress', () => {
      expect(newState).toEqual(createState({ fileLoadProgress: progress }))
    })
  })

  describe('When the file load is cancelled', () => {
    let newState: State

    beforeEach(() => {
      const prevState = createState({
        file,
        fileLoadProgress: progress
      })
      const action = cancelFileLoad()

      newState = reducer(prevState, action)
    })

    test('clears any file AND file load progress', () => {
      expect(newState).toEqual(
        createState({
          file: null,
          fileLoadProgress: null
        })
      )
    })
  })

  describe('When the file is loaded', () => {
    let newState: State

    beforeEach(() => {
      const prevState = createState({
        arrayBuffer: null,
        fileLoadProgress: progress
      })
      const action = fileLoaded(arrayBuffer)

      newState = reducer(prevState, action)
    })

    test('returns the array buffer of the file AND clears any file load progress', () => {
      expect(newState).toEqual(
        createState({
          arrayBuffer,
          fileLoadProgress: null
        })
      )
    })
  })

  describe('When a hash type is selected', () => {
    let newState: State

    beforeEach(() => {
      const prevState = createState({ hash })
      const action = selectHashType(hashType)

      newState = reducer(prevState, action)
    })

    test('returns the hash type AND clears any hash', () => {
      expect(newState).toEqual(
        createState({
          hashType,
          hash: null
        })
      )
    })
  })

  describe('Given the file is loaded', () => {
    let newState: State

    describe('When a hash type is selected', () => {
      beforeEach(() => {
        const prevState = createState({ arrayBuffer })
        const action = selectHashType(hashType)

        newState = reducer(prevState, action)
      })

      test('enables hash calculation', () => {
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
    let newState: State

    describe('When the file is loaded', () => {
      beforeEach(() => {
        const prevState = createState({ hashType })
        const action = fileLoaded(arrayBuffer)

        newState = reducer(prevState, action)
      })

      test('enables hash calculation', () => {
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
    let newState: State

    beforeEach(() => {
      const prevState = createState({
        isCalculatingHash: true,
        hash: null
      })
      const action = hashCalculated(hash)

      newState = reducer(prevState, action)
    })

    test('disables hash calculation AND returns the hash', () => {
      expect(newState).toEqual(
        createState({
          isCalculatingHash: false,
          hash
        })
      )
    })
  })
})
