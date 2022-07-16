import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types'
import React from 'react'

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps({ ...ctx })
    : {}

  return {
    pageProps,
  }
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
}

export default App
