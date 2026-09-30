import type { ApiErrorResponse, ApiSuccessResponse, PaginatedResponse } from '~/types/api'
import type { Candidate, CandidateCreatePayload } from '~/types/candidate'
import type { AuthResponse, LoginCredentials, LoginResponse, User } from '~/types/user'
import type { VotePayload, VoteResponse } from '~/types/vote'

export const useApi = () => {
  const config = useRuntimeConfig()
  const BASE_URL = (config.public.apiBaseUrl as string | undefined) ?? 'http://localhost:8000/api'
  const buildUrl = (path: string) => {
    const cleanBase = BASE_URL.replace(/\/+$/, '')
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    return `${cleanBase}${cleanPath}`
  }

  const getHeaders = () => {
    const headers: Record<string, string> = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }

    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    return headers
  }

  const request = async <T>(
    path: string,
    options: Record<string, unknown> = {}
  ): Promise<T> => {
    return await $fetch<T>(buildUrl(path), {
      credentials: 'include',
      headers: getHeaders(),
      ...options
    })
  }

  return {
    auth: {
      login: (credentials: LoginCredentials) =>
        request<ApiSuccessResponse<LoginResponse> | ApiErrorResponse>('/login', {
          method: 'POST',
          body: credentials
        }),
      logout: () =>
        request<ApiSuccessResponse<null> | ApiErrorResponse>('/logout', {
          method: 'POST'
        }),
      me: () =>
        request<ApiSuccessResponse<AuthResponse> | ApiErrorResponse>('/me', {
          method: 'GET'
        })
    },
    vote: {
      submit: (payload: VotePayload) =>
        request<ApiSuccessResponse<VoteResponse['data']> | ApiErrorResponse>('/vote', {
          method: 'POST',
          body: payload
        })
    }
  }
}
