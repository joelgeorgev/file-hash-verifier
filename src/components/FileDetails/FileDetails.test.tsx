import { render, screen } from '@testing-library/react'

import { FileDetails } from './FileDetails.tsx'

describe('FileDetails', () => {
  test('renders file details', () => {
    render(<FileDetails name='robots.txt' size={100} />)

    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('robots.txt')).toBeInTheDocument()
    expect(screen.getByText('Size')).toBeInTheDocument()
    expect(screen.getByText('100 bytes')).toBeInTheDocument()
  })
})
