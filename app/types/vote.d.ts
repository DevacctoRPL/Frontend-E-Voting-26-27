export type VoteCategory = 'MPK' | 'OSIS'

export interface VotePayload {
  kandidat_id: number | string
  pemilihan_umum_id: number | string

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
