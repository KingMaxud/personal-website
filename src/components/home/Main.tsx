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
         <section>
            <h1 className="uppercase font-semibold tracking-wider text-4xl pt-8 pb-4 text-turquoise">
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
         <section>
            <h1 className="uppercase font-semibold tracking-wider text-4xl pt-8 pb-4 text-turquoise">
               Experience
            </h1>
            <div className="flex flex-col gap-y-10">
               {experiences.map(experience => (
                  <Experience key={experience.id} experience={experience} />
               ))}
            </div>
         </section>
         <GetInTouch />
      </main>
   )
}

export default Main
