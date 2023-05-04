import React from 'react'
import type { Project as ProjectType } from '../../types/project'

type Props = {
   project: ProjectType
}

const Project = ({ project }: Props) => {
   return (
      <div className="flex relative max-w-4xl h-[15.75rem] mx-auto my-16">
         <div className="absolute w-[448px] h-[252px]">
            <img
               className="absolute z-10"
               src={project.images[0].url}
               alt={project.name.toLowerCase()}
            />
            <div className="w-full h-full">
               <div className="absolute top-0 left-6 w-full h-full border border-turquoise"></div>
            </div>
         </div>
         <div className="bg-pinkish-beige max-w-2xl absolute w-[34.5rem] right-0 h-48 flex flex-col justify-between z-10">
            <h3 className="absolute bg-turquoise text-white text-2xl p-1.5 -top-11 left-6 font-mono">
               {project.name}
            </h3>
            <p className="p-6">{project.shortDescription}</p>
            <ul className="flex justify-end gap-4 m-4">
               <li>
                  <a href={`/projects/${project.name.toLowerCase()}`}>More</a>
               </li>
               <li>
                  <a href={project.liveLink}>Live Site</a>
               </li>
               <li>
                  <a href={project.githubLink}>Github</a>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Project
