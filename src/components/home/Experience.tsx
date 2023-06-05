import React from 'react'
import type { Experience as ExperienceType } from '../../types/experience'

type Props = {
   experience: ExperienceType
}

const Experience = ({ experience }: Props) => {
   return (
      <div className="max-w-fit mx-4 lg:mr-6 lg:ml-0">
         <div className="grid grid-cols-2 gap-2 tracking-widest leading-5 mb-1">
            <span className="text-[13px] text-lighter-gray col-start-1 row-start-1 col-end-3">
               {experience.dates}
            </span>
            <h1 className="uppercase text-base font-semibold col-start-1 row-start-2 text-black">
               {experience.position}
            </h1>
            <span className="text-rusty-red text-[13px] text-right font-medium italic col-start-2 row-start-2 self-end justify-end">
               {experience.company}
            </span>
         </div>
         <div className="bg-pinkish-beige py-4 px-5 sm:py-6 sm:px:7 lg:py-8 lg:px-10 leading-5 lg:leading-7">
            <ul>
               {experience.results.map((result, i) => (
                  <li
                     className="relative pl-5 py-2"
                     key={`${experience.id}${i}`}
                  >
                     <span className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-black rounded-full transform -translate-y-1/2"></span>
                     <span>{result}</span>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}

export default Experience
