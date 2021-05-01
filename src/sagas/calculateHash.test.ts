import { runSaga, Saga } from 'redux-saga'

import { calculateHash } from './calculateHash'
import { getFileHash } from '../utils'
import { hashCalculated } from '../actions'
import type { State } from '../store'

jest.mock('../utils')

const mockGetFileHash = getFileHash as jest.MockedFunction<typeof getFileHash>

const arrayBuffer = new ArrayBuffer(1)
const hashType = 'sha-512'
const hash = 'hash'

const executeSaga = (dispatch: jest.Mock, state: Partial<State>) =>
  runSaga({ dispatch, getState: () => state }, calculateHash as Saga<any[]>)

describe('calculateHash', () => {
  describe('When both `arrayBuffer` AND `hashType` are NOT null', () => {
    let dispatch: jest.Mock

    beforeEach(() => {
      dispatch = jest.fn()

      mockGetFileHash.mockResolvedValue(hash)
      executeSaga(dispatch, { arrayBuffer, hashType })
    })

    test('dispatches an action to save the file hash', () => {
      expect(mockGetFileHash).toHaveBeenCalledTimes(1)
      expect(mockGetFileHash).toHaveBeenCalledWith(arrayBuffer, hashType)

      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith(hashCalculated(hash))
    })
  })

  describe.each<[State['arrayBuffer'], State['hashType']]>([
    [arrayBuffer, null],
    [null, hashType],
    [null, null]
  ])(
    'When either `arrayBuffer` OR `hashType` is null',
    (arrayBuffer, hashType) => {
      let dispatch: jest.Mock

      beforeEach(() => {
        dispatch = jest.fn()

        mockGetFileHash.mockResolvedValue(hash)
        executeSaga(dispatch, { arrayBuffer, hashType })
      })

      test('does NOT dispatch any action', () => {
        expect(mockGetFileHash).toHaveBeenCalledTimes(0)

        expect(dispatch).toHaveBeenCalledTimes(0)
      })
    }
  )
})
