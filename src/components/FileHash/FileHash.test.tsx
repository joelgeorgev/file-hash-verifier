import { ComponentProps } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import copy from 'clipboard-copy'

import { FileHash } from '.'

jest.mock('clipboard-copy')

type Props = ComponentProps<typeof FileHash>

const renderFileHash = (props: Props) => render(<FileHash {...props} />)

const findLabel = (): HTMLLabelElement =>
  screen.getByLabelText('Hash:') as HTMLLabelElement
const findTextField = (): HTMLInputElement =>
  screen.getByRole('textbox') as HTMLInputElement
const findCopyButton = (): HTMLButtonElement =>
  screen.getByRole('button') as HTMLButtonElement
const findCopyImage = (): HTMLImageElement =>
  screen.getByAltText('Copy to clipboard') as HTMLImageElement

const hash = 'hash'

describe('FileHash', () => {
  test('renders the hash value in a readonly text field', () => {
    renderFileHash({ hash })

    expect(findLabel()).toBeDefined()

    const textField = findTextField()

    expect(textField).toBeDefined()
    expect(textField.value).toEqual(hash)
    expect(textField.readOnly).toEqual(true)
  })

  test('renders a button to copy hash value to clipboard', () => {
    renderFileHash({ hash })

    expect(findCopyImage()).toBeDefined()

    const copyButton = findCopyButton()

    expect(copyButton).toBeDefined()

    fireEvent.click(copyButton)

    expect(copy).toHaveBeenCalledTimes(1)
    expect(copy).toHaveBeenCalledWith(hash)
  })
})
