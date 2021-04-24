import { ComponentProps } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { HashVerifier } from '.'

type Props = ComponentProps<typeof HashVerifier>

const renderHashVerifier = (props: Props) => render(<HashVerifier {...props} />)

const findLabel = (): HTMLLabelElement =>
  screen.getByLabelText('Compare with:') as HTMLLabelElement
const findTextField = (): HTMLInputElement =>
  screen.getByRole('textbox') as HTMLInputElement
const findImage = (altText: string): HTMLImageElement =>
  screen.getByAltText(altText) as HTMLImageElement
const queryImage = (altText: string): HTMLImageElement =>
  screen.queryByAltText(altText) as HTMLImageElement

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
    test('renders an image indicating a mismatch', () => {
      renderHashVerifier({ hash })

      fireEvent.change(findTextField(), { target: { value: 'h' } })

      expect(findImage(mismatchImageAltText)).toBeDefined()
      expect(queryImage(matchImageAltText)).toEqual(null)
    })
  })

  describe.each([['hash', ' h a s h ', 'HASH']])(
    'When the text matches the hash',
    (text) => {
      test('renders an image indicating a match', () => {
        renderHashVerifier({ hash })

        fireEvent.change(findTextField(), { target: { value: text } })

        expect(findImage(matchImageAltText)).toBeDefined()
        expect(queryImage(mismatchImageAltText)).toEqual(null)
      })
    }
  )
})
