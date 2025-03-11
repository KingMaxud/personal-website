import React from 'react'
import skillsData from '../../data/skills.json'

const Biography = () => {
   return (
      <section id="biography">
         <h1 className="font-semibold tracking-wider text-4xl pt-4 pb-2 lg:pt-8 lg:pb-4 text-turquoise font-playfair-display mx-4 lg:mx-0">
            Hello! I’m Maksud
         </h1>
         <div>
            <p className="font-playfair-display leading-7 lg:leading-10 tracking-wide pb-4 lg:pb-8 mx-4 lg:mx-0 lg:mr-6 text-lg sm:text-2xl lg:text-4xl">
               Self-sufficient and proactive Web Developer with a passion for
               developing innovative solutions. Drawing on a deep understanding
               of both Front-end and Back-end technologies, I am committed to
               creating seamless, intuitive experiences that enhance the lives
               of those who use them.
            </p>

            <div className="flex flex-col gap-3">
               <div className="flex flex-wrap gap-3 font-semibold mx-4 text-xs sm:text-sm border-b border-turquoise pb-3 max-w-full">
                  <span className="border border-black flex items-center justify-center text-center bg-[#3078c7] text-white w-20 h-20 sm:w-24 sm:h-24">
                     TypeScript
                  </span>

                  {skillsData.typescript.map((skill, index) => (
                     <span
                        key={`typescript{${index}`}
                        className="border border-black flex items-center justify-center text-center bg-pinkish-beige w-20 h-20 sm:w-24 sm:h-24"
                     >
                        {skill}
                     </span>
                  ))}
               </div>

               <div className="flex flex-wrap gap-3 font-semibold mx-4 text-xs sm:text-sm border-b border-turquoise pb-3 max-w-full">
                  <span className="border border-black flex items-center justify-center text-center bg-[#e43716] text-white w-20 h-20 sm:w-24 sm:h-24">
                     Rust
                  </span>

                  {skillsData.rust.map((skill, index) => (
                     <span
                        key={`rust{${index}`}
                        className="border border-black flex items-center justify-center text-center bg-pinkish-beige w-20 h-20 sm:w-24 sm:h-24"
                     >
                        {skill}
                     </span>
                  ))}
               </div>

               <div className="flex flex-wrap gap-3 font-semibold mx-4 text-xs sm:text-sm">
                  <span className="border border-black flex items-center justify-center text-center bg-turquoise text-white w-20 h-20 sm:w-24 sm:h-24">
                     General
                  </span>

                  {skillsData.general.map((skill, index) => (
                     <span
                        key={`general{${index}`}
                        className="border border-black flex items-center justify-center text-center bg-pinkish-beige w-20 h-20 sm:w-24 sm:h-24"
                     >
                        {skill}
                     </span>
                  ))}
               </div>

               <div className="flex flex-wrap gap-3 font-semibold mx-4 text-xs sm:text-sm">
                  <span className="border border-black flex items-center justify-center text-center bg-[#9370DB] text-white w-20 h-20 sm:w-24 sm:h-24">
                     Blockchain
                  </span>

                  {skillsData.blockchain.map((skill, index) => (
                     <span
                        key={`general{${index}`}
                        className="border border-black flex items-center justify-center text-center bg-pinkish-beige w-20 h-20 sm:w-24 sm:h-24"
                     >
                        {skill}
                     </span>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Biography
