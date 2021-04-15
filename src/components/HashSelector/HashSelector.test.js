import React from 'react'
import { render, screen } from '@testing-library/react'

import { HashSelector } from '.'

const createDefaultProps = () => ({
  hashType: 'sha-1',
  disabled: false,
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

  describe('When hashType is', () => {
    ;[
      {
        hashType: 'sha-1',
        checkedStates: [true, false, false, false]
      },
      {
        hashType: 'sha-256',
        checkedStates: [false, true, false, false]
      },
      {
        hashType: 'sha-384',
        checkedStates: [false, false, true, false]
      },
      {
        hashType: 'sha-512',
        checkedStates: [false, false, false, true]
      }
    ].forEach(({ hashType, checkedStates }) => {
      describe(`${hashType}`, () => {
        test('renders the radio buttons as checked', () => {
          renderHashSelector({ hashType })

          expect(findFirstRadioButton().checked).toEqual(checkedStates[0])
          expect(findSecondRadioButton().checked).toEqual(checkedStates[1])
          expect(findThirdRadioButton().checked).toEqual(checkedStates[2])
          expect(findFourthRadioButton().checked).toEqual(checkedStates[3])
        })
      })
    })
  })

  describe('When disabled is', () => {
    ;[true, false].forEach((disabled) => {
      describe(`${disabled}`, () => {
        test(`sets disabled as ${disabled} on the field set element`, () => {
          renderHashSelector({ disabled })

          expect(findFieldSet().disabled).toEqual(disabled)
        })
      })
    })
  })
})
