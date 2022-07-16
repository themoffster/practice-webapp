import { render } from '@testing-library/react'
import PatientsListPage from './PatientsListPage'
import React from 'react'

const getWrapper = (props) => render(<PatientsListPage {...props} />)

describe('PatientsListPage', () => {
  it('matches the snapshot', () => {
    const props = {
      patients: [],
    }
    const { getFragment } = getWrapper(props)
    expect(getFragment).toMatchSnapshot()
  })
})
