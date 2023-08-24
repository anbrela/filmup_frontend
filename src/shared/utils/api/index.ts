import { fetcher } from '@/shared/utils/api/utils'

export const get = async (url: string, params?: any) => {
  return await fetcher(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...params,
  })
}
