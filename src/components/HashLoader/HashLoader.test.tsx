import { render, screen } from '@testing-library/react'

import { HashLoader } from '.'

describe('HashLoader', () => {
  test('renders a loading text', () => {
    render(<HashLoader />)

    expect(screen.getByText('Calculating Hash...')).toBeDefined()
  })
})
