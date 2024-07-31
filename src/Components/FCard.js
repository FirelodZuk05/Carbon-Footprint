import React from 'react'
import "./fcard.css"

const FCard = ({data,card}) => {
  return (
    <div className='gradienty bg-theme-5 w-[50%] h-[270px] flex flex-col items-center justify-between border-2 border-theme-25 shadow-2xl shadow-black'>
        <div className='text-5xl h-[25%]  text-black w-full'>{data[card].title}</div>
        <div className={`h-[75%] text-theme-900 ${data[card].desc.length > 150 ? "text-2xl" : "text-4xl"}`}>{data[card].desc}</div>
    </div>
  )
}

export default FCard