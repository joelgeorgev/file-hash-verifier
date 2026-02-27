import { Provider } from 'react-redux'

import { Shell } from './components/Shell/Shell.tsx'
import { store } from './store/index.ts'

import './App.css'

import github from './assets/github.svg'

export const App = () => (
  <main className='main'>
    <header className='header'>
      <h1>File Hash Verifier</h1>
    </header>
    <section className='section'>
      <article>
        <Provider store={store}>
          <Shell />
        </Provider>
      </article>
    </section>
    <footer className='footer'>
      <a href='https://github.com/joelgeorgev/file-hash-verifier'>
        <img src={github} alt='Go to GitHub repository page' />
      </a>
    </footer>
  </main>
)
