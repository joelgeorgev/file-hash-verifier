import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import styled from 'styled-components'

import { ShellContainer } from './containers'
import { reducer } from './reducers'
import { saga } from './sagas'
import github from './assets/github.svg'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(saga)

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 64rem;
  height: 100vh;
  margin: 0 auto;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 2rem;
  overflow: auto;
`

const Footer = styled.div`
  margin: 2rem;
`

export const App = () => (
  <main role='main'>
    <Section>
      <Wrapper>
        <Provider store={store}>
          <ShellContainer />
        </Provider>
      </Wrapper>
      <Footer>
        <a href='https://github.com/joelgeorgev/file-hash-verifier'>
          <img src={github} alt='GitHub' />
        </a>
      </Footer>
    </Section>
  </main>
)
