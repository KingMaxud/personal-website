import React, { useEffect, useState } from 'react'

import { projectsQuery } from '../../utils/queries'
import type { Project as ProjectType } from '../../types/project'
import Project from './Project'

const Projects = () => {
   const [projects, setProjects] = useState<ProjectType[]>([])

   useEffect(() => {
      async function fetchData() {
         try {
            const response = await fetch(
               'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clgxslz6k19ny01umdcohdlwh/master',
               {
                  method: 'POST',
                  headers: {
                     'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ query: projectsQuery(640) }),
               },
            )
            const result = await response.json()
            setProjects(result.data.projects)
         } catch (error) {
            console.error(error)
         }
      }
      fetchData()
   }, [])

   return (
      <section>
         <h1 className="uppercase font-semibold tracking-wider text-4xl pt-8 pb-4 text-turquoise">
            Projects
         </h1>
         {projects.map((project) => <Project key={project.id} project={project} />)}
      </section>
   )
}

export default Projects
