import React from 'react'
import { render, screen } from '@testing-library/react'

import { FileDetails } from '.'

describe('FileDetails', () => {
  test('renders file details', () => {
    render(<FileDetails name='robots.txt' size={100} />)

    expect(screen.getByText('Name')).toBeDefined()
    expect(screen.getByText('robots.txt')).toBeDefined()
    expect(screen.getByText('Size')).toBeDefined()
    expect(screen.getByText('100 bytes')).toBeDefined()
  })
})
