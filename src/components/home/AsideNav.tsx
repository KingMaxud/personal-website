import React from 'react'

import { scrollToTop } from '../utils'

const AsideNav = () => {
   return (
      <div className="hidden lg:block max-w-sm w-1/4">
         <aside className="h-screen flex flex-col justify-between px-8 pt-4 pb-8 fixed">
            <div className="h-24 flex items-center">
               <div onClick={scrollToTop} className="cursor-pointer">
                  <img src="/logo.png" alt="logo" className="w-12 h-12" />
               </div>
            </div>
            <nav className="font-semibold uppercase text-base tracking-widest leading-[72px] pl-4">
               <ul>
                  <li className="hover:text-rusty-red cursor-pointer w-fit relative before:content-[''] transition-colors duration-300 before:absolute before:bottom-6 before:left-0 before:w-0 before:h-px before:bg-rusty-red hover:before:w-full before:transition-all before:duration-300">
                     <a href="#biography">Biography</a>
                  </li>
                  <li className="hover:text-rusty-red cursor-pointer w-fit relative before:content-[''] transition-colors duration-300 before:absolute before:bottom-6 before:left-0 before:w-0 before:h-px before:bg-rusty-red hover:before:w-full before:transition-all before:duration-300">
                     <a href="#projects">Projects</a>
                  </li>
                  <li className="hover:text-rusty-red cursor-pointer w-fit relative before:content-[''] transition-colors duration-300 before:absolute before:bottom-6 before:left-0 before:w-0 before:h-px before:bg-rusty-red hover:before:w-full before:transition-all before:duration-300">
                     <a href="#experience">Experience</a>
                  </li>
                  <li className="hover:text-rusty-red cursor-pointer w-fit relative before:content-[''] transition-colors duration-300 before:absolute before:bottom-6 before:left-0 before:w-0 before:h-px before:bg-rusty-red hover:before:w-full before:transition-all before:duration-300">
                     <a href="#get-in-touch" className="hover:text-rusty-red">
                        Get in touch
                     </a>
                  </li>
               </ul>
            </nav>
            <div className="pl-4 text-sm leading-6">
               <div className="max-w-[200px] pb-3 pr-3">
                  <p className="text-lighter-gray">
                     Feel free to send me a message if you want to enhance your
                     development department.
                  </p>
               </div>
               <div className="cursor-pointer flex">
                  <span className="relative top-1">
                     <img src="/download.svg" alt="download" />
                  </span>
                  <a
                     href="https://media.graphassets.com/XNgQ7dyQ8qEjqknDWk74"
                     className="uppercase font-semibold tracking-widest pl-1.5 hover:text-rusty-red transition-colors duration-300"
                  >
                     Download Resume
                  </a>
               </div>
            </div>
         </aside>
      </div>
   )
}

export default AsideNav
