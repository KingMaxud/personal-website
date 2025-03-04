import { useAnimate } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const MobileNav = () => {
   const [isOpen, setIsOpen] = useState(false)
   const [isMounted, setIsMounted] = useState(false)
   const [scope, animate] = useAnimate()

   const handleToggle = () => {
      setIsOpen(prevState => !prevState)
   }

   useEffect(() => {
      if (isMounted) {
         animate(
            scope.current,
            { transform: isOpen ? 'translateX(0%)' : 'translateX(100%)' },
            { duration: 0.4, ease: [0.31, 1, 0.55, 0.98] },
         )
      } else {
         setIsMounted(true)
      }
   }, [isOpen])

   return (
      <div className="block lg:hidden h-20 w-full absolute flex justify-between bg-transparent items-center px-4">
         <div>
            <img src="/logo.png" alt="logo" className="w-12 h-12 " />
         </div>
         <button onClick={handleToggle}>
            <img src="/hamburger.svg" alt="hamburger" className="w-8 h-8" />
         </button>
         <nav
            ref={scope}
            className={`fixed z-20 right-0 top-0 h-screen w-96 bg-main-bg overflow-hidden shadow-custom translate-x-full`}
         >
            <button className="absolute top-6 right-4" onClick={handleToggle}>
               <img src="/close.svg" alt="close" />
            </button>
            <ul className="text-lg uppercase font-semibold tracking-widest ml-24 my-24">
               <li className="hover:text-rusty-red transition-colors duration-300 py-6">
                  <a href="#biography" onClick={handleToggle}>
                     Biography
                  </a>
               </li>
               <li className="hover:text-rusty-red transition-colors duration-300 py-6">
                  <a href="#projects" onClick={handleToggle}>
                     Projects
                  </a>
               </li>
               <li className="hover:text-rusty-red transition-colors duration-300 py-6">
                  <a href="#experience" onClick={handleToggle}>
                     Experience
                  </a>
               </li>
               <li className="hover:text-rusty-red transition-colors duration-300 py-6">
                  <a href="#get-in-touch" onClick={handleToggle}>
                     Get in touch
                  </a>
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default MobileNav
