import { render, screen } from '@testing-library/react'
import LandingRoute from '../pages/landing'
import React from 'react'

const getWrapper = () => render(<LandingRoute />)

describe('LandingRoute', () => {
  it('renders the page', () => {
    getWrapper()
    expect(screen.getByText('foo')).not.toBeNull()
  })
})
