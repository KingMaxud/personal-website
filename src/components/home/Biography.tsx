import React from 'react'
import skillsData from '../../data/skills.json'

const Biography = () => {
   return (
      <section>
         <h1 className="uppercase font-semibold tracking-wider text-4xl pt-8 pb-4 text-turquoise">
            Hello! I’m Maksud
         </h1>
         <div>
            <p className="font-playfair-display text-4xl leading-10 tracking-wide pr-[5vw] pb-8">
               Self-sufficient and proactive Web Developer with a passion for
               developing innovative solutions. Drawing on a deep understanding of
               both front-end and back-end technologies, I am committed to creating
               seamless, intuitive experiences that enhance the lives of those who
               use them.
            </p>

            <div className="flex flex-wrap gap-3 text-sm font-semibold">
               {skillsData.map((skill) => (
                  <div key={skill.id} className="cursor-pointer border border-black w-24 h-24 flex items-center justify-center bg-pinkish-beige">
                     {skill.text}
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Biography
