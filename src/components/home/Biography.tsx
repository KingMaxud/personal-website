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
               developing innovative solutions. Drawing on a deep understanding of
               both front-end and back-end technologies, I am committed to creating
               seamless, intuitive experiences that enhance the lives of those who
               use them.
            </p>

            <div className="grid grid-cols-skills sm:grid-cols-skillsSm justify-center gap-3 sm:gap-4 font-semibold mx-4 lg:mx-0 text-xs sm:text-sm">
               {skillsData.map((skill) => (
                  <div key={skill.id} className="border border-black flex items-center justify-center bg-pinkish-beige w-20 h-20 sm:w-24 sm:h-24">
                     {skill.text}
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Biography
