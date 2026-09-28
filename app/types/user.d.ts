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

export interface LoginResponse {
  token?: string
  message?: string
  user?: User
}

export interface AuthSession {
  token?: string
  user?: User
}
