import type { Image } from './project.ts'

export type Experience = {
   id: string
   company: string
   dates: string
   position: string
   results: string[]
   image?: Image
}
