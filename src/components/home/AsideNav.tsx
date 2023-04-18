import React from 'react'

import logo from '../../assets/logo.png'
import download from '../../assets/download.svg'

function scrollToTop() {
   window.scrollTo({
      top: 0,
      behavior: "smooth"
   })
}

const AsideNav = () => {
   return (
      <div className="max-w-sm w-1/4">
         <aside className="h-screen flex flex-col justify-between px-8 pt-4 pb-8 fixed">
            <div className="h-24 flex items-center">
               <div onClick={scrollToTop} className="cursor-pointer">
                  <img src={logo} alt="logo" className="w-12 h-12" />
               </div>
            </div>
            <nav className="font-semibold uppercase text-base tracking-widest leading-[72px] pl-4">
               <ul>
                  <li className="hover:text-rusty-red cursor-pointer w-fit relative before:content-[''] before:absolute before:bottom-6 before:left-0 before:w-0 before:h-px before:bg-rusty-red hover:before:w-full before:transition-all before:duration-300">
                     <a href="../../../src/components/home/AsideNav#biography">Biography</a>
                  </li>
                  <li className="hover:text-rusty-red cursor-pointer w-fit relative before:content-[''] before:absolute before:bottom-6 before:left-0 before:w-0 before:h-px before:bg-rusty-red hover:before:w-full before:transition-all before:duration-300">
                     <a href="../../../src/components/home/AsideNav#projects">Projects</a>
                  </li>
                  <li className="hover:text-rusty-red cursor-pointer w-fit relative before:content-[''] before:absolute before:bottom-6 before:left-0 before:w-0 before:h-px before:bg-rusty-red hover:before:w-full before:transition-all before:duration-300">
                     <a href="../../../src/components/home/AsideNav#experience">Experience</a>
                  </li>
                  <li className="hover:text-rusty-red cursor-pointer w-fit relative before:content-[''] before:absolute before:bottom-6 before:left-0 before:w-0 before:h-px before:bg-rusty-red hover:before:w-full before:transition-all before:duration-300">
                     <a href="../../../src/components/home/AsideNav#getintouch" className="hover:text-rusty-red">
                        Get in touch
                     </a>
                  </li>
               </ul>
            </nav>
            <div className="pl-4 text-sm leading-6">
               <div className="max-w-[200px] pb-3 pr-3">
                  <p className="text-lighter-gray">
                     Feel free to send me a message if you want to enhance
                     your development department.
                  </p>
               </div>
               <div className="cursor-pointer flex">
                     <span className="relative top-1">
                        <img src={download} alt="download" className="" />
                     </span>
                  <span className="uppercase font-semibold tracking-widest pl-1.5">
                        Download Resume
                     </span>
               </div>
            </div>
         </aside>
      </div>
   )
}

export default AsideNav

