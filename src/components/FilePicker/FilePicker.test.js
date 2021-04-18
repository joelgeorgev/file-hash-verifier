import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { FilePicker } from '.'

const renderFilePicker = (props) => render(<FilePicker {...props} />)

const findFilePicker = () => screen.getByLabelText('Click to pick a file.')

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
    const onSelect = jest.fn()
    renderFilePicker({ onSelect })

    fireEvent.change(findFilePicker(), { target: { files: [file] } })

    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(onSelect).toHaveBeenCalledWith(file)
  })
})
