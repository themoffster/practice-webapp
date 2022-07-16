const publicDefaultSetting = {
  apiUrl: 'http://localhost:8082',
  contextPath: '',
}

const publicSettings = {
  default: publicDefaultSetting,
}

const serverSettings = {
  default: {
    apiUrl: 'http://localhost:8082',
    port: 8080,
  },
}

const serverRuntimeConfig = (env) => ({
  ...serverSettings.default,
  ...serverSettings[env],
})

const publicRuntimeConfig = (env) => ({
  ...publicSettings.default,
  ...publicSettings[env],
})

module.exports = {
  serverRuntimeConfig,
  publicRuntimeConfig,
}
