import type { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { HashVerifier } from '.'

type Props = ComponentProps<typeof HashVerifier>

const renderHashVerifier = (props: Props) => render(<HashVerifier {...props} />)

const findLabel = (): HTMLLabelElement => screen.getByLabelText('Compare with:')
const findTextField = (): HTMLInputElement => screen.getByRole('textbox')
const findImage = (altText: string): HTMLImageElement =>
  screen.getByAltText(altText)
const queryImage = (altText: string) => screen.queryByAltText(altText)

const hash = 'hash'
const matchImageAltText = 'Hashes match'
const mismatchImageAltText = 'Hashes do not match'

describe('HashVerifier', () => {
  test('renders a text field', () => {
    renderHashVerifier({ hash })

    expect(findLabel()).toBeDefined()
    expect(findTextField()).toBeDefined()
  })

  describe('When the text field has NO text', () => {
    test('does NOT render any image', () => {
      renderHashVerifier({ hash })

      expect(queryImage(matchImageAltText)).toEqual(null)
      expect(queryImage(mismatchImageAltText)).toEqual(null)
    })
  })

  describe('When the text does NOT match the hash', () => {
    test('renders an image indicating a mismatch', async () => {
      renderHashVerifier({ hash })

      const user = userEvent.setup()
      await user.type(findTextField(), 'h')

      expect(findImage(mismatchImageAltText)).toBeDefined()
      expect(queryImage(matchImageAltText)).toEqual(null)
    })
  })

  describe.each([['hash', ' h a s h ', 'HASH']])(
    'When the text matches the hash',
    (text) => {
      test('renders an image indicating a match', async () => {
        renderHashVerifier({ hash })

        const user = userEvent.setup()
        await user.type(findTextField(), text)

        expect(findImage(matchImageAltText)).toBeDefined()
        expect(queryImage(mismatchImageAltText)).toEqual(null)
      })
    }
  )
})
