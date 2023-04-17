import React from 'react'

import Biography from './Biography'
import Projects from './Projects'
import Presentation from './Presentation'
import Experience from './Experience'
import GetInTouch from './GetInTouch'

const Main = () => {
   return (
      <main className="flex-1">
         <Presentation />
         <Biography />
         <Projects />
         <Experience />
         <GetInTouch />
      </main>
   )
}

export default Main
