import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { HashSelector } from '.'

const createDefaultProps = () => ({
  hashType: '',
  isDisabled: false,
  onChange: () => {}
})

const renderHashSelector = (props) =>
  render(<HashSelector {...createDefaultProps()} {...props} />)

const findFieldSet = () => screen.getByRole('group')
const findRadioButtons = () => screen.getAllByRole('radio')
const findRadioButton = (label) => screen.getByLabelText(label)

describe('HashSelector', () => {
  test.each([
    ['SHA-1', 'sha-1'],
    ['SHA-256', 'sha-256'],
    ['SHA-384', 'sha-384'],
    ['SHA-512', 'sha-512']
  ])('renders "%s" radio button', (label, value) => {
    const onChange = jest.fn()
    renderHashSelector({ onChange })

    const radioButton = findRadioButton(label)

    expect(radioButton).toBeDefined()

    fireEvent.click(radioButton)

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith(value)
  })

  describe.each([
    ['sha-1', [true, false, false, false]],
    ['sha-256', [false, true, false, false]],
    ['sha-384', [false, false, true, false]],
    ['sha-512', [false, false, false, true]]
  ])('When `hashType` is "%s"', (hashType, checkedStates) => {
    test('renders the corresponding radio button as checked', () => {
      renderHashSelector({ hashType })

      const radioButtons = findRadioButtons()

      expect(radioButtons[0].checked).toEqual(checkedStates[0])
      expect(radioButtons[1].checked).toEqual(checkedStates[1])
      expect(radioButtons[2].checked).toEqual(checkedStates[2])
      expect(radioButtons[3].checked).toEqual(checkedStates[3])
    })
  })

  describe.each([true, false])('When `isDisabled` is %s', (isDisabled) => {
    test(`sets disabled as ${isDisabled} on the field set element`, () => {
      renderHashSelector({ isDisabled })

      expect(findFieldSet().disabled).toEqual(isDisabled)
    })
  })
})
