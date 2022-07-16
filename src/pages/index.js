import { LOGIN } from 'src/enums/routes'
import React from 'react'

const IndexRoute = () => null

export const getServerSideProps = () => ({
  redirect: {
    destination: LOGIN,
    permanent: true,
  },
})

export default IndexRoute
