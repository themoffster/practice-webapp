import { LANDING } from 'src/enums/routes'
import { render, screen, waitFor } from '@testing-library/react'
import { routeAndScrollTo } from 'src/helpers/router'
import LoginPage from './LoginPage'
import React from 'react'
import userEvent from '@testing-library/user-event'

jest.mock('src/helpers/router', () => ({
  routeAndScrollTo: jest.fn(),
}))

const username = 'foo'
const password = 'bar'
const getWrapper = () => render(<LoginPage />)

describe('LoginPage', () => {
  it('matches the snapshot', () => {
    const { getFragment } = getWrapper()
    expect(getFragment).toMatchSnapshot()
  })

  it('routes to the landing page on successful login call', async () => {
    getWrapper()

    userEvent.type(screen.getByLabelText('Username'), username)
    userEvent.type(screen.getByLabelText('Password'), password)
    userEvent.click(screen.getByLabelText('Login'))
    await waitFor(() => expect(routeAndScrollTo).toHaveBeenCalledWith(LANDING))
  })
})
