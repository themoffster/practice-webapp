import { render, screen } from '@testing-library/react'
import AddPatientRoute from 'src/pages/patients/add'
import React from 'react'

const req = {}
const res = {}

const getWrapper = () => render(<AddPatientRoute />)

describe('AddPatientRoute', () => {
  describe('getInitialProps', () => {
    it('returns the props', async () => {
      const result = await AddPatientRoute.getInitialProps({
        req,
        res,
      })
      expect(result).toEqual({})
    })
  })

  it('renders the page', () => {
    getWrapper()
    expect(screen.getByText('foo')).not.toBeNull()
  })
})
