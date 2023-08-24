export const fetcherHandler = async (response: Response) => {
  const data = await response?.json()

  if (!response.ok) {
    return Promise.reject(data)
  }

  return data
}

type fetcherOptions = {
  method: string
}

export const fetcher = (path: string, options: fetcherOptions) => {
  const url = `${process.env.API_URL}${path}`

  return fetch(url, options).then(fetcherHandler)
}

export const swrOptions = {
  shouldRetryOnError: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  refreshWhenOffline: false,
  refreshWhenHidden: false,
  refreshInterval: 0,
}
