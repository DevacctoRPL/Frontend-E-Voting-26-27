export type CandidateCategory = 'MPK' | 'OSIS'

export interface WorkProgram {
  name: string
  description?: string
}

export type WorkProgramItem = string | WorkProgram

export interface Candidate {
  id?: number | string
  category?: CandidateCategory
  number?: number
  nomor?: number
  nama?: string
  ketua?: string
  wakil?: string
  pemilihan_umum_id?: number
  image?: string
  vision?: string
  mission?: string[]
  workPrograms?: {
    shortTerm?: WorkProgramItem[]
    longTerm?: WorkProgramItem[]
  }
  created_at?: string
  updated_at?: string
}

export interface CandidateCreatePayload {
  nomor: number
  nama: string
  pemilihan_umum_id: number
}

export interface CandidateNames {
  ketua?: string
  ketuaClass?: string
  wakil?: string
  wakilClass?: string
}
