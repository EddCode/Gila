import useSWR from 'swr'

export function useLogs ({ key = 'logs', fetcher } = {}) {
  const { data, error, isLoading } = useSWR(key, fetcher)

  return {
    data: data?.logs || [],
    error,
    isLoading
  }
}

export function useSendNotification ({ key = 'logs', fetcher, shouldFech } = {}) {
  const { data, mutate } = useSWR(key, shouldFech ? fetcher : null, {
    revalidateOnFocus: false
  })

  return {
    response: data,
    mutate
  }
}
