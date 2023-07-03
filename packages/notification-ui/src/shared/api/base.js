import { API_URL } from '../config'

export const fetcher = async (url, args) => {
  const apiUrl = `${API_URL}${url}`
  return fetch(apiUrl, { ...args }).then(res => res.json())
}
