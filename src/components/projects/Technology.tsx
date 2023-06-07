import React from 'react'

const Technology = ({ name, text }: { name: string; text: string }) => {
   return (
      <div className="flex flex-col ml-4 mb-2">
         <h3 className="bg-turquoise text-white text-lg md:text-2xl ml-6 mt-3 p-1.5 font-mono w-fit">
            {name}
         </h3>
         <p className="bg-pinkish-beige w-fit p-3 text-lg">{text}</p>
      </div>
   )
}

export default Technology
