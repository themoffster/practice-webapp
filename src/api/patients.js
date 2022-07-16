import { fetchJSON } from 'src/helpers/fetch'
import { getApiUrl } from 'src/helpers/config'

export const PATIENTS_URL = `${getApiUrl()}/patients`

export const getAllPatients = async ({ req, res } = {}) =>
  fetchJSON({
    url: PATIENTS_URL,
    params: {
      req,
      res,
      method: 'GET',
    },
  })
