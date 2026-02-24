import { MockedFunction } from 'vitest'
import type { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { FileLoader } from '.'

type Props = ComponentProps<typeof FileLoader>
type OnCancel = Props['onCancel']

const createDefaultProps = (): Props => ({ progress: 50, onCancel: () => {} })

const renderFileLoader = (props?: Partial<Props>) =>
  render(<FileLoader {...createDefaultProps()} {...props} />)

const findProgressBar = (): HTMLProgressElement =>
  screen.getByRole('progressbar')
const findLabel = (): HTMLLabelElement => screen.getByLabelText('Loading file:')
const findCancelButton = (): HTMLButtonElement => screen.getByRole('button')
const queryCancelButton = () => screen.queryByRole('button')

describe('FileLoader', () => {
  test('renders a progress bar', () => {
    const progress = 90
    renderFileLoader({ progress })

    const progressBar = findProgressBar()

    expect(progressBar).toBeDefined()
    expect(progressBar.max).toEqual(100)
    expect(progressBar.value).toEqual(progress)
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
      test('invokes the callback function', async () => {
        const onCancel: MockedFunction<OnCancel> = vi.fn()
        renderFileLoader({ onCancel })

        const user = userEvent.setup()
        await user.click(findCancelButton())

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
