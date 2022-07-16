import { fetchJSON } from 'src/helpers/fetch'
import { getAllPatients, PATIENTS_URL } from './patients'

jest.mock('src/helpers/fetch', () => ({
  fetchJSON: jest.fn(),
}))

const patientId = '123'
const patient = {
  id: patientId,
}
const patients = [patient]

describe('patients api calls', () => {
  describe('getAllPatients', () => {
    it('returns all patients', async () => {
      const { req, res } = {}
      fetchJSON.mockResolvedValueOnce({ data: patients })

      const response = await getAllPatients({ req, res })

      expect(fetchJSON).toBeCalledWith({
        url: PATIENTS_URL,
        params: {
          method: 'GET',
          req,
          res,
        },
      })
      expect(response).toEqual({ data: patients })
    })

    it('returns an error when getAllPatients call fails', async () => {
      const { req, res } = {}
      fetchJSON.mockResolvedValueOnce({ error: {} })

      const response = await getAllPatients({ req, res })
      expect(fetchJSON).toBeCalledWith({
        url: PATIENTS_URL,
        params: {
          method: 'GET',
          req,
          res,
        },
      })

      expect(response).toEqual({ error: {} })
    })
  })
})
