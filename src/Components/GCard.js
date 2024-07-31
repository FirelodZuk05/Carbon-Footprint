import React from 'react'

const GCard = ({info,card}) => {
  return (
    <div className='flex flex-col h-auto lg:h-5/6 w-full lg:w-[25vw] border-2 border-green-100 bg-gradient-to-r to-white rounded-lg shadow-2xl shadow-black from-green-500 justify-center items-center p-8'>
        <div className='flex items-center space-x-4'>
            <h1 className='text-3xl lg:text-5xl font-bold'>{info[card].title}</h1>
        </div>
        <p className='text-base lg:text-lg'>
            {info[card].desc}
        </p>
    </div>
  )
}

export default GCard