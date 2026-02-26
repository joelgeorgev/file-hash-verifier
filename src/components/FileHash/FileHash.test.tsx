import type { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import copy from 'clipboard-copy'

import { FileHash } from './FileHash.tsx'

vi.mock('clipboard-copy')

type Props = ComponentProps<typeof FileHash>

const renderFileHash = (props: Props) => render(<FileHash {...props} />)

const findLabel = (): HTMLLabelElement => screen.getByLabelText('Hash:')
const findTextField = (): HTMLInputElement => screen.getByRole('textbox')
const findCopyButton = (): HTMLButtonElement => screen.getByRole('button')
const findCopyImage = (): HTMLImageElement =>
  screen.getByAltText('Copy to clipboard')

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

  test('renders a button to copy hash value to clipboard', async () => {
    renderFileHash({ hash })

    expect(findCopyImage()).toBeDefined()

    const copyButton = findCopyButton()

    expect(copyButton).toBeDefined()

    const user = userEvent.setup()
    await user.click(copyButton)

    expect(copy).toHaveBeenCalledTimes(1)
    expect(copy).toHaveBeenCalledWith(hash)
  })
})
