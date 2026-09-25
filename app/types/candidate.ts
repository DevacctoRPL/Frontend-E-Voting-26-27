export interface Candidate {
  category: 'MPK' | 'OSIS'
  number: number
  ketua: string
  wakil: string
  image?: string
  visi?: string
  misi?: string[]
  programs?: {
    shortTerm?: string[]
    longTerm?: string[]
  }
}
