import { getAllPatients } from 'src/api/patients'
import PatientsListPage from 'src/components/PatientsListPage/PatientsListPage'
import React from 'react'

const PatientsRoute = (props) => <PatientsListPage {...props} />

PatientsRoute.getInitialProps = async ({ req, res } = {}) => {
  const { data: patients, error: patientsError } = await getAllPatients({
    req,
    res,
  })

  if (patientsError)
    return {
      errorStatus: patientsError.status ?? 500,
    }

  return {
    patients,
  }
}

export default PatientsRoute
