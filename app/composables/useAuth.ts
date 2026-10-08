import type { ApiErrorResponse, ApiSuccessResponse } from '~/types/api'
import type { AuthResponse, LoginCredentials, LoginResponse, User, VotingStatus } from '~/types/user'

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
  const votingStatus = useState<VotingStatus | null>('auth.votingStatus', () => null)

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
    votingStatus.value = session?.status_pemilihan
      ? { ...session.status_pemilihan }
      : null

    if (session?.user) {
      user.value = session.user
    }
  }

  const clearSession = () => {
    token.value = null
    user.value = null
    votingStatus.value = null

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

    if (isSuccessResponse<AuthResponse>(response)) {
      user.value = response.data.user ?? null
      votingStatus.value = response.data.status_pemilihan ?? {}
    }

    return response
  }

  const getVotingStatus = async () => {
    if (votingStatus.value) {
      return votingStatus.value
    }

    const response = await me()
    return isSuccessResponse<AuthResponse>(response)
      ? votingStatus.value
      : null
  }

  const markVoteComplete = (category: 'mpk' | 'osis') => {
    votingStatus.value = {
      sudah_vote_mpk: false,
      sudah_vote_osis: false,
      ...votingStatus.value,
      [category === 'mpk' ? 'sudah_vote_mpk' : 'sudah_vote_osis']: true
    }
  }

  const isAuthenticated = () => Boolean(
    token.value ||
    user.value ||
    (import.meta.client && localStorage.getItem('token'))
  )

  return {
    token,
    user,
    votingStatus,
    login,
    logout,
    me,
    getVotingStatus,
    markVoteComplete,
    clearSession,
    isAuthenticated
  }
}
