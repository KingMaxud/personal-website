import React from 'react'

const Presentation = () => {
   return (
      <section
         id="presentation"
         className="md:bg-bgMd bg-bg h-screen bg-cover bg-center font-mono text-xl"
      >
         <div className="text-white absolute top-[23.8%] right-[6.3%] hidden lg:block">
            <div className="uppercase font-bold leading-6 mb-5">
               Let's work together
            </div>
            <div className="leading-8">I am available at</div>
            <a href="mailto:maxud754@gmail.com " target="_blank" rel="noopener">
               maxud754@gmail.com
            </a>
            <a
               className="flex"
               href="tg://resolve?domain=kingmaxud"
               target="_blank"
               rel="noopener"
            >
               <img
                 className="relative top-1 w-5 h-5"
                 src="/telegram-white.svg"
                 alt="telegram"
               />
               <p className="pl-2">kingmaxud</p>
            </a>
         </div>
      </section>
   )
}

export default Presentation
