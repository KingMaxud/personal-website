import React from 'react'

import Biography from './Biography'
import Projects from './Projects'
import Presentation from './Presentation'
import Experience from './Experience'
import GetInTouch from './GetInTouch'
import type { Project } from '../../types/project'

const Main = ({ projects }: { projects: Project[] }) => {
   return (
      <main className="flex-1">
         <Presentation />
         <Biography />
         <Projects projects={projects} />
         <Experience />
         <GetInTouch />
      </main>
   )
}

export default Main
