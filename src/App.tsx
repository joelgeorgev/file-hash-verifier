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

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 64rem;
  height: 100vh;
  margin: 0 auto;
`

const Header = styled.header`
  text-align: center;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
`

const Footer = styled.footer`
  margin: 2rem;
`

export const App = () => (
  <Main>
    <Header>
      <h1>File Hash Verifier</h1>
    </Header>
    <Section>
      <article>
        <Provider store={store}>
          <ShellContainer />
        </Provider>
      </article>
    </Section>
    <Footer>
      <a href='https://github.com/joelgeorgev/file-hash-verifier'>
        <img src={github} alt='Go to GitHub repository page' />
      </a>
    </Footer>
  </Main>
)
