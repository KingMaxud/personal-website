import React from 'react'

import cartraderSearchXL from '../../assets/cartrader-search-xl.jpg'
import logo from '../../assets/logo.png'
import Technology from './Technology'

const Main = ({ project }: { project: string }) => {
   return (
      <main>
         <a href="/" className="fixed cursor-pointer top-10 left-8">
            <img src={logo} alt="logo" className="w-12 h-12" />
         </a>
         <section className="flex flex-col items-center w-4/5 mx-auto">
            <h1 className="font-semibold tracking-wider text-5xl text-turquoise py-10">
               CarTrader
            </h1>
            <div className="flex">
               <div>
                  <span className="relative">
                     <img
                        src={cartraderSearchXL}
                        alt="cartrader"
                        width={640}
                        height={360}
                     />
                  </span>
               </div>
               <p className="text-xl pl-6">
                  CarTrader is a full-stack prototype project just to show the
                  capabilities of the technology stack and how I can work with
                  it.
               </p>
            </div>
         </section>
         <section className="flex flex-col items-start w-4/5 mx-auto">
            <h1 className="text-center font-semibold tracking-wider text-4xl text-turquoise py-6">
               Technologies I used and why
            </h1>
            <div>
               <h3 className="text-3xl font-semibold">Frontend</h3>
               <Technology
                  name="Typescript"
                  text="Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla
                     Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla
                     Bla-Bla-Bla Bla-Bla-Bla"
               />
               <Technology
                  name="Typescript"
                  text="Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla
                     Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla
                     Bla-Bla-Bla Bla-Bla-Bla"
               />
               <h3 className="text-3xl font-semibold">Backend</h3>
               <Technology
                  name="Typescript"
                  text="Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla
                     Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla Bla-Bla-Bla
                     Bla-Bla-Bla Bla-Bla-Bla"
               />
            </div>
         </section>
      </main>
   )
}

export default Main
