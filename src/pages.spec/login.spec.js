import { render, screen } from '@testing-library/react'
import LoginRoute from 'src/pages/login'
import React from 'react'

const getWrapper = () => render(<LoginRoute />)

describe('LoginRoute', () => {
  it('renders the page', () => {
    getWrapper()
    expect(screen.getByLabelText('Login')).not.toBeNull()
  })
})
