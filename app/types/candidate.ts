export interface WorkProgram {
  name: string
  description: string
}

export type WorkProgramItem = string | WorkProgram

export interface Candidate {
  category: 'MPK' | 'OSIS'
  number: number
  ketua: string
  wakil: string
  image?: string
  vision?: string
  mission?: string[]
  workPrograms: {
    shortTerm?: WorkProgramItem[]
    longTerm?: WorkProgramItem[]
  }
}
