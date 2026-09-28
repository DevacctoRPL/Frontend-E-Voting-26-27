export interface ApiErrorResponse {
  message?: string
  error?: string
  status?: number
  errors?: Record<string, string[]>
}

export interface ApiSuccessResponse<T> {
  data: T
  message?: string
  status?: number | string
}

export interface PaginatedResponse<T> {
  data: T[]
  total?: number
  page?: number
  perPage?: number
}

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
