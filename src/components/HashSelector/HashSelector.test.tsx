import { MockedFunction } from 'vitest'
import type { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { HashSelector } from '.'

type Props = ComponentProps<typeof HashSelector>
type OnSelect = Props['onSelect']

const createDefaultProps = (): Props => ({
  hashType: null,
  isDisabled: false,
  onSelect: () => {}
})

const renderHashSelector = (props?: Partial<Props>) =>
  render(<HashSelector {...createDefaultProps()} {...props} />)

const findFieldSet = (): HTMLFieldSetElement => screen.getByRole('group')
const findRadioButtons = (): HTMLInputElement[] => screen.getAllByRole('radio')
const findRadioButton = (label: string): HTMLInputElement =>
  screen.getByLabelText(label)

describe('HashSelector', () => {
  test.each<[string, Props['hashType']]>([
    ['SHA-1', 'sha-1'],
    ['SHA-256', 'sha-256'],
    ['SHA-384', 'sha-384'],
    ['SHA-512', 'sha-512']
  ])('renders "%s" radio button', async (label, value) => {
    const onSelect: MockedFunction<OnSelect> = vi.fn()
    renderHashSelector({ onSelect })

    const radioButton = findRadioButton(label)

    expect(radioButton).toBeDefined()

    const user = userEvent.setup()
    await user.click(radioButton)

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
