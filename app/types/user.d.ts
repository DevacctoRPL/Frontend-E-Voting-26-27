export interface User {
  id?: number | string
  nis?: string
  nama?: string
  name?: string
  email?: string
  password?: string
  kelas?: string
  role?: 'student' | 'admin' | string
  isLoggedIn?: boolean
  created_at?: string
  updated_at?: string
}

export interface LoginCredentials {
  nis?: string
  email?: string
  password: string
}

export interface VotingStatus {
  sudah_vote_mpk?: boolean
  sudah_vote_osis?: boolean
}

export interface AuthResponse {
  token?: string
  message?: string
  user?: User
  status_pemilihan?: VotingStatus
}

export interface LoginResponse extends AuthResponse {
}

export interface AuthSession {
  token?: string
  user?: User
}
