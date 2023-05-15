import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import type { Project as ProjectType } from '../../types/project'

type Props = {
   project: ProjectType
}

const Project = ({ project }: Props) => {
   const ref = useRef(null)

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end start'],
   })

   const translateDecorator = useTransform(
      scrollYProgress,
      [0, 1],
      ['-120%', '-80%'],
   )

   const translateDescription = useTransform(
      scrollYProgress,
      [0, 1],
      ['40%', '-40%'],
   )

   return (
      <div
         ref={ref}
         className="flex relative my-16 w-full justify-between items-center"
      >
         <div className="relative w-[45%] left-[11%]">
            <a href={`/projects/${project.name.toLowerCase()}`} target="_blank">
               <img
                  className="relative z-10"
                  src={project.images[0].url}
                  alt={project.name.toLowerCase()}
               />
            </a>
            <div className="w-full h-full">
               <motion.div
                  style={{ y: translateDecorator }}
                  className="absolute left-6 w-full h-full border border-turquoise"
               ></motion.div>
            </div>
         </div>
         <motion.div
            style={{ translateY: translateDescription }}
            className="bg-pinkish-beige relative w-[40%] h-48 flex flex-col justify-between z-10 right-[11%]"
         >
            <h3 className="absolute bg-turquoise text-white text-2xl p-1.5 -top-11 left-6 font-mono">
               {project.name}
            </h3>
            <p className="p-6">{project.shortDescription}</p>
            <ul className="flex justify-end gap-4 m-4">
               <li>
                  <a href={`/projects/${project.name.toLowerCase()}`} target="_blank">More</a>
               </li>
               <li>
                  <a href={project.liveLink} target="_blank">Live Site</a>
               </li>
               <li>
                  <a href={project.githubLink} target="_blank">Github</a>
               </li>
            </ul>
         </motion.div>
      </div>
   )
}

export default Project
