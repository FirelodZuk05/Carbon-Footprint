import React from 'react'

const Card = ({info}) => {

  return (
        <div className='flex flex-col mx-auto h-60 w-60 rounded-md bg-theme-600 border-theme-900 border-2 shadow-lg shadow-theme-900 mt-10'>
            <div className='text-theme-900'>{info.serial}</div>
            <div className='text-theme-900'>{info.title}</div>
            <img src='assets.imag' alt='not found'/>
        </div>
  )
}

export default Card