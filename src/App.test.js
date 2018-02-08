import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

import { App } from './App';

it('smoke test', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('snapshot test', () => {
  const tree = renderer.create(
    <App />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('radio button state change test', () => {
  let app = ReactTestUtils.renderIntoDocument(<App />);

  // Get 'SHA-256' radio button node
  let inputElement = ReactTestUtils.scryRenderedDOMComponentsWithTag(app, 'input')[2];
  ReactTestUtils.Simulate.change(inputElement);
  expect(inputElement.checked).toBe(true);
  expect(app.state.hashType).toBe('sha-256');
});