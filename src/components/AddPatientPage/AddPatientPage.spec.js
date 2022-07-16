import { render } from '@testing-library/react'
import AddPatientPage from './AddPatientPage'
import React from 'react'

const getWrapper = () => render(<AddPatientPage />)

describe('AddPatientPage', () => {
  it('matches the snapshot', () => {
    const { getFragment } = getWrapper()
    expect(getFragment).toMatchSnapshot()
  })
})
