import { configureStore, Tuple } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { reducer } from '../reducers/index.ts'
import { rootSaga } from '../sagas/index.ts'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer,
  middleware() {
    return new Tuple(sagaMiddleware)
  }
})

sagaMiddleware.run(rootSaga)

export type State = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch
