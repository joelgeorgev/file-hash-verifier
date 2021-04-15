import { ComponentProps } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { FileLoader } from '.'

type Props = ComponentProps<typeof FileLoader>

const createDefaultProps = (): Props => ({ progress: 50, onCancel: () => {} })

const renderFileLoader = (props?: Partial<Props>) =>
  render(<FileLoader {...createDefaultProps()} {...props} />)

const findProgressBar = (): HTMLProgressElement =>
  screen.getByRole('progressbar') as HTMLProgressElement
const findLabel = (): HTMLLabelElement =>
  screen.getByLabelText('Loading file:') as HTMLLabelElement
const findCancelButton = (): HTMLButtonElement =>
  screen.getByRole('button') as HTMLButtonElement
const queryCancelButton = (): HTMLButtonElement =>
  screen.queryByRole('button') as HTMLButtonElement

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
      test('invokes the callback function', () => {
        const onCancel = jest.fn()
        renderFileLoader({ onCancel })

        fireEvent.click(findCancelButton())

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
