export type Project = {
   name: string
   description: string
   mainPhoto: string
   technologies: Technology[]
}

type Technology = {
   type: 'frontend' | 'backend'
   name: string
   why?: string
}
