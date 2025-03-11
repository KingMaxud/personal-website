export type Project = {
   id: string
   name: string
   shortDescription: string
   liveLink: string
   githubLink: string
   images: Image[]
   technologies: Technology[]
}

export type Image = {
   url: string
}

type Technology = {
   name: string
}
