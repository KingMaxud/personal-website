import React, { useEffect, useState } from 'react'

import type { Project as ProjectType } from '../../types/project'
import Project from './Project'

const Projects = ({ projects }: { projects: ProjectType[] }) => {
   return (
      <section>
         <h1 className="uppercase font-semibold tracking-wider text-4xl pt-8 pb-4 text-turquoise">
            Projects
         </h1>
         {projects.map((project) => (
            <Project key={project.id} project={project} />
         ))}
      </section>
   )
}

export default Projects
