import React from 'react'

const Experience = () => {
   return (
      <section>
         <h1 className="uppercase font-semibold tracking-wider text-4xl pt-8 pb-4 text-turquoise">
            Experience
         </h1>
         <div className='max-w-fit mr-4'>
            <div className="grid grid-cols-2 gap-2 tracking-widest leading-5 mb-1">
               <span className="text-[13px] text-lighter-gray col-start-1 row-start-1">
                  Jun 2022 — Feb 2023
               </span>
               <h1 className="uppercase text-base font-semibold col-start-1 row-start-2 text-black">
                  Full Stack Developer
               </h1>
               <span className="text-rusty-red text-[13px] text-right font-medium italic col-start-2 row-start-2 self-end justify-end">
                  Startup, CIS
               </span>
            </div>
            <div className="bg-pinkish-beige py-8 px-10 leading-7">
               <ul>
                  <li className="relative pl-5 py-2">
                     <span className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-black rounded-full transform -translate-y-1/2"></span>
                     <span>
                     Developed a backend from scratch using Nest, Graphql,
                     Prisma, and PostgreSQL.
                  </span>
                  </li>
                  <li className="relative pl-5 py-2">
                     <span className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-black rounded-full transform -translate-y-1/2"></span>
                     <span>
                     Created necessary pages on React and made requests using
                     Apollo.
                  </span>
                  </li>
                  <li className="relative pl-5 py-2">
                     <span className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-black rounded-full transform -translate-y-1/2"></span>
                     <span>
                     Launched a smart search microservice using Elasticsearch
                     and connected it via gRPC.
                  </span>
                  </li>
                  <li className="relative pl-5 py-2">
                     <span className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-black rounded-full transform -translate-y-1/2"></span>
                     <span>Managed cache to improve system performance.</span>
                  </li>
                  <li className="relative pl-5 py-2">
                     <span className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-black rounded-full transform -translate-y-1/2"></span>
                     <span>
                     Collaborated with a small team to meet project milestones
                     and deliverables.
                  </span>
                  </li>
                  <li className="relative pl-5 py-2">
                     <span className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-black rounded-full transform -translate-y-1/2"></span>
                     <span>
                     Participated in code reviews and provided constructive
                     feedback to improve code quality.
                  </span>
                  </li>
               </ul>
            </div>
         </div>
      </section>
   )
}

export default Experience
