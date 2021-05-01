import useSWR from 'swr'

import api from 'services/api'

/**
 * Custom hook used to get api responses
 */
export function useFetch(url: string) {
  const { data, error, mutate } = useSWR(url, async (url) => {
    const response = await api.get(url)

    return response.data
  })

  return { data, error, mutate }
}
