import { ALL_PATIENTS } from 'src/enums/routes'
import { render, screen, waitFor } from '@testing-library/react'
import { routeAndScrollTo } from 'src/helpers/router'
import LandingPage from './LandingPage'
import React from 'react'
import userEvent from '@testing-library/user-event'

jest.mock('src/helpers/router', () => ({
  routeAndScrollTo: jest.fn(),
}))

const getWrapper = () => render(<LandingPage />)

describe('LandingPage', () => {
  it('matches the snapshot', () => {
    const { getFragment } = getWrapper()
    expect(getFragment).toMatchSnapshot()
  })

  it('routes to the all patients page on button click', async () => {
    getWrapper()
    userEvent.click(screen.getByLabelText('All patients'))
    await waitFor(() =>
      expect(routeAndScrollTo).toHaveBeenCalledWith(ALL_PATIENTS)
    )
  })
})
