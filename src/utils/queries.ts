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

export const experienceQuery = `
   query ExperienceQuery {
      experiences(orderBy: publishedAt_DESC) {
         id
         company
         dates
         position
         results
         image {
           url
         }
      }
   }
`
