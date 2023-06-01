import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import hamburger from '../../assets/hamburger.svg'
import logo from '../../assets/logo.png'
import close from '../../assets/close.svg'

const MobileNav = () => {
   const [isOpen, setIsOpen] = useState(false)
   const controls = useAnimation()

   const handleToggle = () => {
      setIsOpen(prevState => !prevState)
   }

   const variants = {
      open: { x: 0 },
      closed: { x: '100%' },
   }

   const transition = {
      ease: [0.31, 1, 0.55, 0.98],
   }

   useEffect(() => {
      controls.start(isOpen ? 'open' : 'closed')
   }, [controls, isOpen])

   return (
      <div className="block lg:hidden h-20 w-full absolute flex justify-between bg-transparent items-center px-4">
         <div>
            <img src={logo} alt="logo" className="w-12 h-12 " />
         </div>
         <button onClick={handleToggle}>
            <img src={hamburger} alt="hamburger" className="w-8 h-8" />
         </button>
         <motion.nav
            variants={variants}
            initial="closed"
            animate={controls}
            transition={transition}
            className={`fixed z-20 right-0 top-0 h-screen w-96 bg-main-bg overflow-hidden shadow-custom`}
         >
            <button className="absolute top-6 right-4" onClick={handleToggle}>
               <img src={close} alt="close" />
            </button>
            <ul className="text-lg uppercase font-semibold tracking-widest ml-24 my-24">
               <li className="hover:text-rusty-red transition-colors duration-300 py-6">
                  <a href="../../../src/components/home/AsideNav#biography">
                     Biography
                  </a>
               </li>
               <li className="hover:text-rusty-red transition-colors duration-300 py-6">
                  <a href="../../../src/components/home/AsideNav#projects">
                     Projects
                  </a>
               </li>
               <li className="hover:text-rusty-red transition-colors duration-300 py-6">
                  <a href="../../../src/components/home/AsideNav#experience">
                     Experience
                  </a>
               </li>
               <li className="hover:text-rusty-red transition-colors duration-300 py-6">
                  <a href="../../../src/components/home/AsideNav#getintouch">
                     Get in touch
                  </a>
               </li>
            </ul>
         </motion.nav>
      </div>
   )
}

export default MobileNav
