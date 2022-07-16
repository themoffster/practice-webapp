import { render } from '@testing-library/react'
import LoginPage from './LoginPage'
import React from 'react'

const getWrapper = () => render(<LoginPage />)

describe('LoginPage', () => {
  it('matches the snapshot', () => {
    const { getFragment } = getWrapper()
    expect(getFragment).toMatchSnapshot()
  })
})
