import { getAllPatients } from 'src/api/patients'
import { render, screen } from '@testing-library/react'
import PatientsRoute from 'src/pages/patients'
import React from 'react'

const req = {}
const res = {}
const patients = [
  {
    id: '123',
  },
]

jest.mock('src/api/patients', () => ({
  getAllPatients: jest.fn(),
}))

const getWrapper = () => render(<PatientsRoute />)

describe('PatientsRoute', () => {
  describe('getInitialProps', () => {
    describe('when the getAllPatients call is successful', () => {
      it('returns the patients array', async () => {
        getAllPatients.mockResolvedValueOnce({ data: patients })
        const result = await PatientsRoute.getInitialProps({
          req,
          res,
        })

        expect(result.patients).toEqual(patients)
      })
      describe('when the getAllPatients call is unsuccessful', () => {
        it('returns the error status', async () => {
          getAllPatients.mockReturnValueOnce({ error: { status: 400 } })

          const result = await PatientsRoute.getInitialProps({
            req,
            res,
          })

          expect(result.errorStatus).toBe(400)
        })
        it('returns the default 500 error status', async () => {
          getAllPatients.mockReturnValueOnce({ error: { status: undefined } })

          const result = await PatientsRoute.getInitialProps({
            req,
            res,
          })

          expect(result.errorStatus).toBe(500)
        })
      })
    })

    it('renders the page', () => {
      getWrapper()
      expect(screen.getByText('Name')).not.toBeNull()
      expect(screen.getByText('DOB')).not.toBeNull()
    })
  })
})
