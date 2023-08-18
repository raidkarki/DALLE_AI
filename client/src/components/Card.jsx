import React from 'react'
import { download } from '../assets'
import { downloadImage } from '../utils'

const Card = ({name,prompt,image}) => {
  return (
    <div className='group rounded-xl relative shadow-card hover:shadow-cardhover card' >
     <img src={image} alt={prompt}  className='w-full h-auto object-cover rounded-xl '/>
     <div className='group-hover:flex hidden flex-col max-h-[94%] 
     absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md
     
     '>

      <p className='text-white text-sm overflow-auto prompt'>
          {prompt}
      </p>
      <div className='mt-5 flex justify-between '>
        <div className='flex items-center gap-2'>
          <div className='h-7 w-7 bg-green-700 flex justify-center items-center
          font-bold text-white text-xs rounded-full'>
            {name[0]}
          </div>
          <p className='text-white text-sm '>{ name}</p>
        </div>
        <div className='w-8 h-8 object-contain'>
          <button onClick={()=>downloadImage(key,image)} className='outline-none bg-transparent border-none'>
            <img src={download} alt="download" />
          </button>
        </div>
        
         </div>


     </div>
      


    </div>
  )
}

export default Card