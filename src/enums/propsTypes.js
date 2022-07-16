import PropTypes from 'prop-types'

export const patientPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
})
