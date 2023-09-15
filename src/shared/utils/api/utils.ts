export const fetcherHandler = async (response: Response) => {
  if (!response.ok) {
    return Promise.reject(response);
  }

  return response;
};

type fetcherOptions = {
  method: string;
  headers?: any;
  body?: any;
};

export const fetcher = (path: string, options: fetcherOptions) => {
  const url = `http://localhost:8080${path}`;
  return fetch(url, options).then(fetcherHandler);
};

export const swrOptions = {
  shouldRetryOnError: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  refreshWhenOffline: false,
  refreshWhenHidden: false,
  refreshInterval: 0,
};
