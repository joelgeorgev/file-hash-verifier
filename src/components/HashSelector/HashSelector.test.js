import React from 'react'
import { render, screen } from '@testing-library/react'

import { HashSelector } from '.'

const createDefaultProps = () => ({
  hashType: 'sha-1',
  isDisabled: false,
  onChange: () => {}
})

const renderHashSelector = (props) =>
  render(<HashSelector {...createDefaultProps()} {...props} />)

const findFieldSet = () => screen.getByRole('group')
const findRadioButtons = () => screen.getAllByRole('radio')
const findFirstRadioButton = () => screen.getByLabelText('SHA-1')
const findSecondRadioButton = () => screen.getByLabelText('SHA-256')
const findThirdRadioButton = () => screen.getByLabelText('SHA-384')
const findFourthRadioButton = () => screen.getByLabelText('SHA-512')

describe('HashSelector', () => {
  test('renders four radio buttons', () => {
    renderHashSelector()

    expect(findRadioButtons()).toHaveLength(4)

    expect(findFirstRadioButton()).toBeDefined()
    expect(findSecondRadioButton()).toBeDefined()
    expect(findThirdRadioButton()).toBeDefined()
    expect(findFourthRadioButton()).toBeDefined()
  })

  describe.each([
    ['sha-1', [true, false, false, false]],
    ['sha-256', [false, true, false, false]],
    ['sha-384', [false, false, true, false]],
    ['sha-512', [false, false, false, true]]
  ])('When `hashType` is "%s"', (hashType, checkedStates) => {
    test('renders the corresponding radio button as checked', () => {
      renderHashSelector({ hashType })

      expect(findFirstRadioButton().checked).toEqual(checkedStates[0])
      expect(findSecondRadioButton().checked).toEqual(checkedStates[1])
      expect(findThirdRadioButton().checked).toEqual(checkedStates[2])
      expect(findFourthRadioButton().checked).toEqual(checkedStates[3])
    })
  })

  describe.each([true, false])('When `isDisabled` is %s', (isDisabled) => {
    test(`sets disabled as ${isDisabled} on the field set element`, () => {
      renderHashSelector({ isDisabled })

      expect(findFieldSet().disabled).toEqual(isDisabled)
    })
  })
})
