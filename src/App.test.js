import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { App } from './App'

it('smoke test', () => {
  const container = document.createElement('div')
  ReactDOM.render(<App />, container)
})

it('snapshot test', () => {
  const tree = renderer.create(
    <App />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('radio button state change test', () => {
  const container = document.createElement('div')
  renderer.act(() => {
    ReactDOM.render(<App />, container)
  })

  // Get 'SHA-256' radio button node
  const inputElement = container.querySelectorAll('input')[2]
  renderer.act(() => {
    inputElement.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })
  expect(inputElement.checked).toBe(true)
})