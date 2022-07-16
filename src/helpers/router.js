import { isString } from 'lodash/fp'
import { stringify } from 'qs'
import Router from 'next/router'

const scrollToTop = () => {
  window.scrollTo(0, 0)
  Router.events.off('routeChangeComplete', scrollToTop)
}

export const routeAndScrollTo = (path) => {
  Router.events.on('routeChangeComplete', scrollToTop)
  if (isString(path)) {
    Router.push(`${path}`, `${path}`)
    return
  }

  const { pathname, query } = path
  const queryString = stringify(query)
  const url = [pathname, queryString].filter(Boolean).join('?')
  Router.push(`${url}`, `${url}`)
}
