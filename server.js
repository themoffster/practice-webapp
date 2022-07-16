const express = require('express')
const { parse } = require('url')

const next = require('next')
const settings = require('./settings')
const { serverRuntimeConfig } = settings

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const { port } = serverRuntimeConfig(process.env.LOCAL_ENVIRONMENT)

app.prepare().then(() => {
  const server = express()

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    return handle(req, res, parsedUrl)
  })

  server.listen(port, (err) => {
    if (err) throw err
    global.console.log(`> Ready on http://localhost:${port}`)
  })
})
