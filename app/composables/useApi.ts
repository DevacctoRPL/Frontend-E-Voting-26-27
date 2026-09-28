import type { ApiErrorResponse, ApiSuccessResponse, PaginatedResponse } from '~/types/api'
import type { Candidate, CandidateCreatePayload } from '~/types/candidate'
import type { LoginCredentials, LoginResponse, User } from '~/types/user'
import type { VotePayload, VoteResponse } from '~/types/vote'

export const useApi = () => {
  const config = useRuntimeConfig()
  const BASE_URL = (config.public.apiBaseUrl as string | undefined) ?? ''
  const buildUrl = (path: string) => `${BASE_URL.replace(/\/$/, '')}${path}`

  const getHeaders = () => {
    const headers: Record<string, string> = {
      'Accept': 'application/json',
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
        request<ApiSuccessResponse<User> | ApiErrorResponse>('/me', {
          method: 'GET'
        })
    },
    pemilihanUmum: {
      index: () =>
        request<ApiSuccessResponse<PaginatedResponse<Candidate>> | ApiErrorResponse>('/pemilihan-umum', {
          method: 'GET'
        })
    },
    kandidat: {
      create: (payload: CandidateCreatePayload) =>
        request<ApiSuccessResponse<Candidate> | ApiErrorResponse>('/kandidat', {
          method: 'POST',
          body: payload
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
