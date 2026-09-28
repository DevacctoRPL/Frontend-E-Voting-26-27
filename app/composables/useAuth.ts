import type { ApiErrorResponse, ApiSuccessResponse } from '~/types/api'
import type { LoginCredentials, LoginResponse, User } from '~/types/user'

const isSuccessResponse = <T>(
  response: ApiSuccessResponse<T> | ApiErrorResponse
): response is ApiSuccessResponse<T> => 'data' in response

export const useAuth = () => {
  const api = useApi()

  const token = useState<string | null>('auth.token', () => {
    if (import.meta.client) {
      return localStorage.getItem('token')
    }

    return null
  })

  const user = useState<User | null>('auth.user', () => null)

  const setSession = (session?: Partial<LoginResponse>) => {
    const nextToken = session?.token ?? null

    if (import.meta.client) {
      if (nextToken) {
        localStorage.setItem('token', nextToken)
      } else {
        localStorage.removeItem('token')
      }
    }

    token.value = nextToken

    if (session?.user) {
      user.value = session.user
    }
  }

  const clearSession = () => {
    token.value = null
    user.value = null

    if (import.meta.client) {
      localStorage.removeItem('token')
    }
  }

  const login = async (credentials: LoginCredentials) => {
    const response = await api.auth.login(credentials)

    if (isSuccessResponse<LoginResponse>(response)) {
      setSession(response.data)
    }

    return response
  }

  const logout = async () => {
    const response = await api.auth.logout()
    clearSession()
    return response
  }

  const me = async () => {
    const response = await api.auth.me()

    if (isSuccessResponse<User>(response)) {
      user.value = response.data
    }

    return response
  }

  const isAuthenticated = () => Boolean(token.value || user.value)

  return {
    token,
    user,
    login,
    logout,
    me,
    clearSession,
    isAuthenticated
  }
}
