import React from 'react'

import cartraderXL from '../../assets/cartrader-xl.jpg'

const Projects = () => {
   return (
      <section>
         <h1 className="uppercase font-semibold tracking-wider text-4xl pt-8 pb-4 text-turquoise">
            Projects
         </h1>
         <div className="flex relative max-w-4xl h-[15.75rem] mx-auto my-16">
            <div className="absolute z-0">
               <span className="relative">
                  <img src={cartraderXL} alt="cartrader" />
               </span>
               <div></div>
            </div>
            <div className="bg-pinkish-beige max-w-2xl absolute w-[34.5rem] right-0 h-48 flex flex-col justify-between z-10">
               <h3 className="absolute bg-turquoise text-white text-2xl p-1.5 -top-11 left-6 font-mono">
                  CarTrader
               </h3>
               <p className="p-6">
                  Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla
                  Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla
                  Bla-Bla-Bla Bla-Bla-Bla
               </p>
               <ul className="flex justify-end gap-4 m-4">
                  <li>More</li>
                  <li>Live Site</li>
                  <li>Github</li>
               </ul>
            </div>
         </div>
      </section>
   )
}

export default Projects
