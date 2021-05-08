import type { ComponentProps } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { FilePicker } from '.'

type Props = ComponentProps<typeof FilePicker>
type OnSelect = Props['onSelect']

const createDefaultProps = (): Props => ({
  isDisabled: false,
  onSelect: () => {}
})

const renderFilePicker = (props?: Partial<Props>) =>
  render(<FilePicker {...createDefaultProps()} {...props} />)

const findFilePicker = (): HTMLInputElement =>
  screen.getByLabelText('Click to pick a file.') as HTMLInputElement

describe('FilePicker', () => {
  test('renders a file picker', () => {
    renderFilePicker()

    const filePicker = findFilePicker()

    expect(filePicker).toBeDefined()
    expect(filePicker.multiple).toEqual(false)
    expect(filePicker.disabled).toEqual(false)
  })

  test('renders file picker as disabled', () => {
    renderFilePicker({ isDisabled: true })

    expect(findFilePicker().disabled).toEqual(true)
  })

  test('invokes the callback function with the selected file', () => {
    const file = new File(['Hello World'], 'robots.txt', {
      type: 'text/plain'
    })
    const onSelect: jest.MockedFunction<OnSelect> = jest.fn()
    renderFilePicker({ onSelect })

    fireEvent.change(findFilePicker(), { target: { files: [file] } })

    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(onSelect).toHaveBeenCalledWith(file)
  })

  test.each([null, []])(
    'does NOT invoke the callback function if there is NO file',
    (files) => {
      const onSelect: jest.MockedFunction<OnSelect> = jest.fn()
      renderFilePicker({ onSelect })

      fireEvent.change(findFilePicker(), { target: { files } })

      expect(onSelect).toHaveBeenCalledTimes(0)
    }
  )
})
