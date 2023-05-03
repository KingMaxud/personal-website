export const projectsQuery = `
   query Projects {
      projects {
         id
         name
         shortDescription
         liveLink
         githubLink
         images {
            url
         }
         technologies {
            name
         }
      }
    }
`

export const projectsQueryExtended = `
   query ProjectsExtended {
      projects {
         name
         description
         images {
            url
         }
         technologies {
            id
            name
            why
            type
         }
      }
   }
`
