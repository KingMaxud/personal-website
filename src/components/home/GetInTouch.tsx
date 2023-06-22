import React from 'react'

import telegram from '../../assets/telegram-black.svg'
import mail from '../../assets/mail.svg'
import phone from '../../assets/phone.svg'

const GetInTouch = () => {
   return (
      <section id="get-in-touch" className="pb-6">
         <h1 className="uppercase font-semibold tracking-normal lg:tracking-wider pt-4 pb-2 lg:pt-8 lg:pb-4 text-turquoise ml-4 lg:ml-0 text-3xl lg:text-4xl">
            Get in touch
         </h1>
         <div className="flex flex-col gap-2 ml-4 lg:ml-0">
            <p className="font-playfair-display text-2xl lg:text-4xl tracking-wide pr-6 pb-3 lg:pb-4">
               I am currently looking for opportunity.
            </p>
            <div className="grid sm:grid-cols-2">
               <div className="mb-4 sm:mb-0">
                  <h3 className="uppercase text-black text-lg mb-1 sm:mb-2 font-semibold">
                     Contact me
                  </h3>
                  <div className="flex mb-1.5">
                     <img
                        className="relative top-1 w-5 h-5 mr-2"
                        src={mail}
                        alt="mail"
                     />
                     <a
                        href="mailto:maxud754@gmail.com"
                        className="hover:text-rusty-red transition-colors duration-300"
                        target="_blank"
                        rel="noopener"
                     >
                        maxud754@gmail.com
                     </a>
                  </div>
                  <div className="flex mb-1.5">
                     <img
                        className="relative top-1 w-5 h-5 mr-2"
                        src={phone}
                        alt="phone"
                     />
                     <a
                        href="tel:+79107082786"
                        target="_blank"
                        rel="noopener"
                        className="hover:text-rusty-red transition-colors duration-300"
                     >
                        +7 (910) 708 27 86
                     </a>
                  </div>
                  <div className="flex">
                     <img
                        className="relative top-1 w-5 h-5"
                        src={telegram}
                        alt="telegram"
                     />
                     <a
                        className="pl-2 hover:text-rusty-red transition-colors duration-300"
                        href="tg://resolve?domain=kingmaxud"
                        target="_blank"
                        rel="noopener"
                     >
                        kingmaxud
                     </a>
                  </div>
               </div>
               <div>
                  <h3 className="uppercase text-black text-lg mb-1 sm:mb-2 font-semibold">
                     Where to find me
                  </h3>
                  <div className="mb-1.5 relative">
                     <span className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-black rounded-full transform -translate-y-1/2"></span>
                     <a
                        className="relative left-3.5 hover:text-rusty-red transition-colors duration-300"
                        href="https://github.com/kingmaxud"
                        target="_blank"
                     >
                        Github
                     </a>
                  </div>
                  <div className="mb-1.5 relative">
                     <span className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-black rounded-full transform -translate-y-1/2"></span>
                     <a
                        className="relative left-3.5 hover:text-rusty-red transition-colors duration-300"
                        href="https://www.linkedin.com/in/maksud-abdulmalikov/"
                        target="_blank"
                     >
                        LinkedIn
                     </a>
                  </div>
                  <div className="relative">
                     <span className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-black rounded-full transform -translate-y-1/2"></span>
                     <a
                        className="relative left-3.5 hover:text-rusty-red transition-colors duration-300"
                        href="https://hh.ru/applicant/resumes/view?resume=eff2a6cbff0b6f7c960039ed1f4930624b6f70"
                        target="_blank"
                     >
                        hh.ru
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default GetInTouch
