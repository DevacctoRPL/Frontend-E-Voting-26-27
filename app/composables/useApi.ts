export const useApi = () => {
  const config = useRuntimeConfig()
  const BASE_URL = config.public.apiBaseUrl
  const buildUrl = (path: string) => `${BASE_URL}${path}`

  const getHeaders = () => {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    }

    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    return headers
  }

  const request = async <T>(
    path: string,
    options: any = {}
  ): Promise<T> => {
    return await $fetch<T>(buildUrl(path), {
      headers: getHeaders(),
      ...options,
    })
  }

  return {
    auth: {
      login: (credentials: Record<string, any>) =>
        request('/login', {
          method: 'POST',
          body: credentials,
        }),
      logout: () =>
        request('/logout', {
          method: 'POST',
        }),
      me: () =>
        request('/me', {
          method: 'GET',
        }),
    },
    pemilihanUmum: {
      index: () =>
        request('/pemilihan-umum', {
          method: 'GET',
        }),
    },
    kandidat: {
      create: (payload: Record<string, any>) =>
        request('/kandidat', {
          method: 'POST',
          body: payload,
        }),
    },
    vote: {
      submit: (payload: Record<string, any>) =>
        request('/vote', {
          method: 'POST',
          body: payload,
        }),
    },
  }
}