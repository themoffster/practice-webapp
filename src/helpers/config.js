import getConfig from 'next/config'
const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

export const getApiUrl = (client = false) => {
  if (process.browser || client) {
    return publicRuntimeConfig.apiUrl
  }
  return serverRuntimeConfig.apiUrl
}
