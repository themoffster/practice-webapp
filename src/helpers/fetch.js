export const fetchJSON = async ({ url, params }) =>
  fetch(url, {
    ...params,
    type: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => ({ data: json }))
    .catch((error) => ({ error }))
