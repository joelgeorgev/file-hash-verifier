import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import 'tachyons/css/tachyons.min.css'

import { ShellContainer } from './containers'
import { rootReducer } from './reducers'
import { saga } from './sagas'
import github from './assets/github.svg'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(saga)

export const App = () => {
  return (
    <main role='main'>
      <section className='flex flex-column w-80 mw8 vh-100 center pv5'>
        <div className='flex flex-auto flex-column'>
          <Provider store={store}>
            <ShellContainer />
          </Provider>
        </div>
        <div className='self-center'>
          <a href='https://github.com/joelgeorgev/file-hash-verifier'>
            <img src={github} alt='GitHub' />
          </a>
        </div>
      </section>
    </main>
  )
}
