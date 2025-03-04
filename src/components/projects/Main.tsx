import React from 'react'

import Technology from './Technology'

type Props = {
   data: {
      name: string
      description: string
      images: { url: string }[]
      technologies: {
         id: string
         name: string
         why: string
         type: 'frontend' | 'backend'
      }[]
   }
}

const Main = ({ data }: Props) => {
   return (
      <main className="min-h-screen">
         <a href="/" className="absolute cursor-pointer top-6 left-4 sm:top-10 sm:left-8">
            <img src="/logo.png" alt="logo" className="w-9 h-9 sm:w-12 sm:h-12" />
         </a>
         <section className="flex flex-col items-center w-11/12 md:w-4/5 mx-auto">
            <h1 className="font-semibold tracking-wider text-3xl md:text-5xl text-turquoise py-10">
               {data.name}
            </h1>
            <div className="grid md:grid-cols-projectMd items-center relative">
               <div className="w-[80vw] h-[45vw] md:w-[48vw] md:h-[27vw] lg:w-[48vw] lg:h-[27vw] md:w-[27vw] mb-4 md:mb-0 relative">
                  <img
                     src={data.images[1].url}
                     alt={data.name.toLowerCase()}
                  />
               </div>
               <p className="text-lg lg:text-xl sm:pl-6">
                  {data.description}
               </p>
            </div>
         </section>
         <section className="flex flex-col items-start w-11/12 md:w-4/5 mx-auto">
            <h1 className="text-center font-semibold tracking-wider text-2xl md:text-4xl text-turquoise py-6">
               Technologies I used and why
            </h1>
            <div>
               <h3 className="text-xl md:text-3xl font-semibold">Frontend</h3>
               {data.technologies
                  .filter(tech => tech.type === 'frontend')
                  .map(tech => (
                     <Technology
                        name={tech.name}
                        text={tech.why}
                        key={tech.id}
                     />
                  ))}
               <h3 className="text-xl md:text-3xl font-semibold">Backend</h3>
               {data.technologies
                  .filter(tech => tech.type === 'backend')
                  .map(tech => (
                     <Technology
                        name={tech.name}
                        text={tech.why}
                        key={tech.id}
                     />
                  ))}
            </div>
         </section>
      </main>
   )
}

export default Main
