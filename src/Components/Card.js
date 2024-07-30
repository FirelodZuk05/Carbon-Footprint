import React from 'react'

const Card = ({info,card}) => {

  
  

  return (
        <div className='flex flex-col mx-auto max-w-sm min-w-[400px] h-80 rounded-md bg-theme-600 border-theme-900 border-2 shadow-2xl shadow-theme-900 mt-10 gap-5 ml-3 mb-3 transition-all'>
            <div className='text-theme-100 flex items-center justify-center rounded-xl mt-2 bg-theme-900 mx-auto w-[80px] text-7xl'>{info[card].serial}</div>
            <div className={`text-theme-900 mx-auto  w-[70%] ${info[card].title.length > 150 ? "text-xl" : "text-2xl"}`}>{info[card].title+'.'}</div>
          </div>
  )
}

export default Card