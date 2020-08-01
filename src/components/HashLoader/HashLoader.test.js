import React from 'react'
import { render, screen } from '@testing-library/react'

import { HashLoader } from '.'

const renderHashLoader = () => render(<HashLoader />)

describe('HashLoader', () => {
  test('renders', () => {
    renderHashLoader()

    expect(screen.getByText('Calculating Hash...')).toBeDefined()
  })
})
