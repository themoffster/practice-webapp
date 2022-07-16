import AddPatientPage from 'src/components/AddPatientPage/AddPatientPage'
import React from 'react'

const AddPatientRoute = (props) => <AddPatientPage {...props} />

AddPatientRoute.getInitialProps = async ({ req, res } = {}) => ({})

export default AddPatientRoute
