import React from 'react'

const FormFeild = ({name,labelname,type,onchange,surpriseme, handlesurpriseme,placeholder,value}) => {
  return (
    <div>

      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={name} className='block text-sm font-medium text-gray-900'>
          {labelname}
        </label>
        {surpriseme && (
          <button type='button'
          onClick={handlesurpriseme}
          className='font-semibold text-xs bg-[#ECECF1] py-1 
          px-2 rounded-[5px] text-black'>
            Surprise me!
          </button>
        )}

      </div>
      <input type={type}
      id={name}
      name={name}
      placeholder={placeholder} 
      value={value}
      onChange={onchange}
      
      
      required
      className='bg-gray-100 border border-gray-300
       text-gray-900 text-sm rounded-lg
        focus:ring-[#6469ff] focus:border-[#4649ff]
         outline-none block w-full p-3'/>
    </div>
  )
}

export default FormFeild