import type { ComponentProps } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { HashSelector } from '.'

type Props = ComponentProps<typeof HashSelector>

const createDefaultProps = (): Props => ({
  hashType: null,
  isDisabled: false,
  onSelect: () => {}
})

const renderHashSelector = (props?: Partial<Props>) =>
  render(<HashSelector {...createDefaultProps()} {...props} />)

const findFieldSet = (): HTMLFieldSetElement =>
  screen.getByRole('group') as HTMLFieldSetElement
const findRadioButtons = (): HTMLInputElement[] =>
  screen.getAllByRole('radio') as HTMLInputElement[]
const findRadioButton = (label: string): HTMLInputElement =>
  screen.getByLabelText(label) as HTMLInputElement

describe('HashSelector', () => {
  test.each<[string, Props['hashType']]>([
    ['SHA-1', 'sha-1'],
    ['SHA-256', 'sha-256'],
    ['SHA-384', 'sha-384'],
    ['SHA-512', 'sha-512']
  ])('renders "%s" radio button', (label, value) => {
    const onSelect = jest.fn()
    renderHashSelector({ onSelect })

    const radioButton = findRadioButton(label)

    expect(radioButton).toBeDefined()

    fireEvent.click(radioButton)

    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(onSelect).toHaveBeenLastCalledWith(value)
  })

  describe.each<[Props['hashType'], boolean[]]>([
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
