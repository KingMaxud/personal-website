import React from 'react'

import Biography from './Biography'
import Project from './Project'
import Presentation from './Presentation'
import Experience from './Experience'
import GetInTouch from './GetInTouch'
import type { Project as ProjectType } from '../../types/project'
import type { Experience as ExperienceType } from '../../types/experience'

type Props = {
   projects: ProjectType[]
   experiences: ExperienceType[]
}

const Main = ({ projects, experiences }: Props) => {
   return (
      <main className="flex-1">
         <Presentation />
         <Biography />
         <section id="experience">
            <h1 className="uppercase font-semibold tracking-wider pt-4 pb-2 lg:pt-8 lg:pb-4 text-turquoise ml-4 lg:ml-0 text-3xl lg:text-4xl">
               Experience
            </h1>
            <div className="flex flex-col gap-y-10">
               {experiences.map(experience => (
                  <Experience key={experience.id} experience={experience} />
               ))}
            </div>
         </section>
         <section id="projects">
            <h1 className="uppercase font-semibold tracking-wider pt-4 pb-2 lg:pt-8 lg:pb-4 text-turquoise ml-4 lg:ml-0 text-3xl lg:text-4xl">
               Projects
            </h1>
            <div className="flex flex-col gap-y-10">
               {projects.map((project, i) => (
                  <Project
                     key={project.id}
                     project={project}
                     isEven={i % 2 === 0}
                  />
               ))}
            </div>
         </section>
         <GetInTouch />
      </main>
   )
}

export default Main
