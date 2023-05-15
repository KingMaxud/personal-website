export const projectsQuery = (width: number) => `
   query Projects {
      projects {
         id
         name
         shortDescription
         liveLink
         githubLink
         images {
            url (transformation: {
              image: { resize: { width: ${width} } }
            })
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
