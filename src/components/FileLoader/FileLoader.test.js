import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { FileLoader } from '.'

const createDefaultProps = () => ({ progress: 50 })

const renderFileLoader = (props) =>
  render(<FileLoader {...createDefaultProps()} {...props} />)

const findProgressBar = () => screen.getByRole('progressbar')
const findLabel = () => screen.getByLabelText('Loading file:')
const findCancelButton = () => screen.getByRole('button')
const queryCancelButton = () => screen.queryByRole('button')

describe('FileLoader', () => {
  test('renders a progress bar', () => {
    renderFileLoader({ progress: 90 })

    const progressBar = findProgressBar()
    expect(progressBar).toBeDefined()
    expect(progressBar.getAttribute('max')).toEqual('100')
    expect(progressBar.getAttribute('value')).toEqual('90')
  })

  test('renders a label', () => {
    renderFileLoader()

    expect(findLabel()).toBeDefined()
  })

  describe('When progress is NOT 100', () => {
    test('renders a cancel button', () => {
      renderFileLoader()

      const cancelButton = findCancelButton()
      expect(cancelButton).toBeDefined()
      expect(cancelButton.textContent).toEqual('Cancel')
    })

    describe('When the cancel button is clicked', () => {
      let onCancel

      beforeEach(() => {
        onCancel = jest.fn()
        renderFileLoader({ onCancel })

        fireEvent.click(findCancelButton())
      })

      test('invokes the callback function', () => {
        expect(onCancel).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('When progress is 100', () => {
    test('does NOT render the cancel button', () => {
      renderFileLoader({ progress: 100 })

      expect(queryCancelButton()).toEqual(null)
    })
  })
})
