import { MockedFunction } from 'vitest'
import type { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { FilePicker } from '.'

type Props = ComponentProps<typeof FilePicker>
type OnSelect = Props['onSelect']

const createOnSelect = (): MockedFunction<OnSelect> => vi.fn()

const createDefaultProps = (): Props => ({
  isDisabled: false,
  onSelect: () => {}
})

const renderFilePicker = (props?: Partial<Props>) =>
  render(<FilePicker {...createDefaultProps()} {...props} />)

const findFilePicker = (): HTMLInputElement =>
  screen.getByLabelText('Click to pick a file.')

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

  test('invokes the callback function with the selected file', async () => {
    const onSelect = createOnSelect()
    renderFilePicker({ onSelect })

    const filePicker = findFilePicker()
    const file = new File(['Hello World'], 'robots.txt', {
      type: 'text/plain'
    })
    const user = userEvent.setup()

    await user.upload(filePicker, file)

    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(onSelect).toHaveBeenCalledWith(file)

    await user.upload(filePicker, [])

    expect(onSelect).toHaveBeenCalledTimes(1)
  })
})
