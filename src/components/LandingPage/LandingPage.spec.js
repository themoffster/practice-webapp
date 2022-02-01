import { render } from '@testing-library/react'
import LandingPage from './LandingPage'
import React from 'react'

const getWrapper = () => render(<LandingPage />)

describe('LandingPage', () => {
  it('matches the snapshot', () => {
    const { getFragment } = getWrapper()
    expect(getFragment).toMatchSnapshot()
  })
})
