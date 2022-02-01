import { render } from '@testing-library/react'
import App from 'src/pages/_app'
import React from 'react'

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn(() => ({ route: '/' })),
}))
jest.mock('next/config', () => () => ({
  publicRuntimeConfig: { buildId: '1.0.0_SNAPSHOT' },
}))

const componentChildren = 'Component content!'
const Component = () => componentChildren
Component.getInitialProps = jest.fn(() => ({ prop: 'value' }))

const pageProps = {}
const props = {
  Component,
  pageProps,
  router: { pathname: '/current-page' },
  userAgent: 'user-agent-string',
}
const ctx = { res: {}, req: {} }
const getWrapper = (additionalProps) =>
  render(<App {...props} {...additionalProps} />)

describe('App', () => {
  it('gets the initial props', async () => {
    expect(await App.getInitialProps({ Component, pageProps, ctx })).toEqual(
      expect.objectContaining({})
    )
  })
})
