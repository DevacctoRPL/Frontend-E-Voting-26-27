export type VoteCategory = 'MPK' | 'OSIS'

export interface VotePayload {
  category: VoteCategory
  candidateNumber: number
  candidate_id?: number | string
  pemilihan_umum_id?: number | string
  user_id?: number | string
  voterNis?: string
  nis?: string
}

export interface VoteResponse {
  message?: string
  success?: boolean
  data?: {
    id?: number | string
    category?: VoteCategory
    candidateNumber?: number
    candidate_id?: number | string
    user_id?: number | string
    created_at?: string
  }
}

export interface VoteProgressState {
  mpkVoted: boolean
  osisVoted: boolean
}
