import React from 'react'

import telegram from '../assets/telegram-white.svg'

const Presentation = () => {
   return (
      <section
         className="bg-man h-screen bg-cover bg-center font-mono text-xl"
      >
         <div className="text-white absolute top-[23.8%] right-[6.3%]">
            <div className="uppercase font-bold leading-6 mb-5">
               Let's work together
            </div>
            <div className="leading-8">I am available at</div>
            <div>maxud754@gmail.com</div>
            <div className="flex">
               <img
                  className="relative top-1 w-5 h-5"
                  src={telegram}
                  alt="telegram"
               />
               <p className="pl-2">kingmaxud</p>
            </div>
         </div>
      </section>
   )
}

export default Presentation

