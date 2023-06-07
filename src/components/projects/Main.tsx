import React, { useEffect, useState } from 'react'

import logo from '../../assets/logo.png'
import Technology from './Technology'
import useWindowWidth from '../../utils/useWindowWidth'
import { resizeImageUrl } from '../../utils/resizeImageUrl'

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

function pickImageWidth(windowWidth: number): number {
   const imageWidths = [
      { windowWidth: 2560, width: 1600 },
      { windowWidth: 1920, width: 1000 },
      { windowWidth: 1536, width: 850 },
      { windowWidth: 1280, width: 690 },
      { windowWidth: 1024, width: 576 },
      { windowWidth: 640, width: 462 },
   ]

   for (let i = 0; i < imageWidths.length; i++) {
      if (windowWidth >= imageWidths[i].windowWidth) {
         return imageWidths[i].width
      }
   }

   return 600
}

const Main = ({ data }: Props) => {
   const windowWidth = useWindowWidth()
   const [imageUrl, setImageUrl] = useState(
      resizeImageUrl(data.images[1].url, pickImageWidth(windowWidth)),
   )

   useEffect(() => {
      setImageUrl(
         resizeImageUrl(data.images[1].url, pickImageWidth(windowWidth)),
      )
   }, [windowWidth])

   return (
      <main className="min-h-screen">
         <a href="/" className="absolute cursor-pointer top-6 left-4 sm:top-10 sm:left-8">
            <img src={logo} alt="logo" className="w-9 h-9 sm:w-12 sm:h-12" />
         </a>
         <section className="flex flex-col items-center w-11/12 md:w-4/5 mx-auto">
            <h1 className="font-semibold tracking-wider text-3xl md:text-5xl text-turquoise py-10">
               {data.name}
            </h1>
            <div className="flex flex-col sm:flex-row items-center relative">
               <img
                  className="w-full h-full sm:w-8/12 sm:h-8/12 lg:w-full lg:h-full mb-4 sm:mb-0"
                  src={imageUrl}
                  alt={data.name.toLowerCase()}
               />
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
