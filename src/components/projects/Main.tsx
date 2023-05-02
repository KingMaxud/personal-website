import React from 'react'

import logo from '../../assets/logo.png'
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
      <main>
         <a href="/" className="fixed cursor-pointer top-10 left-8">
            <img src={logo} alt="logo" className="w-12 h-12" />
         </a>
         <section className="flex flex-col items-center w-4/5 mx-auto">
            <h1 className="font-semibold tracking-wider text-5xl text-turquoise py-10">
               {data.name}
            </h1>
            <div className="flex">
               <div>
                  <span className="relative">
                     <img
                        src={data.images[1].url}
                        alt={data.name.toLowerCase()}
                        width={640}
                        height={360}
                     />
                  </span>
               </div>
               <p className="text-xl pl-6">{data.description}</p>
            </div>
         </section>
         <section className="flex flex-col items-start w-4/5 mx-auto">
            <h1 className="text-center font-semibold tracking-wider text-4xl text-turquoise py-6">
               Technologies I used and why
            </h1>
            <div>
               <h3 className="text-3xl font-semibold">Frontend</h3>
               {data.technologies
                  .filter((tech) => tech.type === 'frontend')
                  .map((tech) => (
                     <Technology name={tech.name} text={tech.why} key={tech.id}/>
                  ))}
               <h3 className="text-3xl font-semibold">Backend</h3>
               {data.technologies
                  .filter((tech) => tech.type === 'backend')
                  .map((tech) => (
                     <Technology name={tech.name} text={tech.why} key={tech.id} />
                  ))}
            </div>
         </section>
      </main>
   )
}

export default Main
