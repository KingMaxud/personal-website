import React from 'react'

import telegram from '../../assets/telegram-black.svg'
import mail from '../../assets/mail.svg'
import phone from '../../assets/phone.svg'

const GetInTouch = () => {
   return (
      <section className='pb-6'>
         <h1 className="uppercase font-semibold tracking-normal lg:tracking-wider pt-4 pb-2 lg:pt-8 lg:pb-4 text-turquoise ml-4 lg:ml-0 text-3xl lg:text-4xl">
            Get in touch
         </h1>
         <div className='flex flex-col gap-2 ml-4 lg:ml-0'>
            <p className="font-playfair-display text-2xl lg:text-4xl tracking-wide pr-6 pb-3 lg:pb-6">
               I am currently looking for opportunity.
            </p>
            <div className="flex">
               <img className="relative top-1 w-5 h-5 mr-2" src={mail} alt="mail" />
               <p>maxud754@gmail.com</p>
            </div>
            <div className="flex">
               <img className="relative top-1 w-5 h-5 mr-2" src={phone} alt="phone" />
               <p>+7 (910) 708 27 86</p>
            </div>
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

export default GetInTouch
