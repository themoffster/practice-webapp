import { ALL_PATIENTS } from 'src/enums/routes'
import { Button } from 'react-bootstrap'
import { routeAndScrollTo } from 'src/helpers/router'
import React from 'react'

const LandingPage = () => (
  <>
    <Button
      aria-label="All patients"
      onClick={() => {
        routeAndScrollTo(ALL_PATIENTS)
      }}
    >
      All patients
    </Button>
  </>
)

export default LandingPage
