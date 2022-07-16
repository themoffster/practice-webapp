import { patientPropTypes } from 'src/enums/propsTypes'
import { Table } from 'react-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'

const PatientsListPage = ({ patients }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient) => (
          <tr key={patient.id}>
            <td>
              {patient.firstname} {patient.lastname}
            </td>
            <td>{patient.dob}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

PatientsListPage.defaultProps = {
  patients: [],
}

PatientsListPage.propTypes = {
  patients: PropTypes.arrayOf(patientPropTypes).isRequired,
}

export default PatientsListPage
