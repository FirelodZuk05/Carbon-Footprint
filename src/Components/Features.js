import React from 'react'
import FCard from "./FCard"
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Features = ({data,clickHandler1,clickHandler2,card}) => {
  
  return (
    <div className='flex flex-col gap-10 mb-4'>
        <p className='text-5xl ml-20'>Features provided by Us:</p>
        <div className='flex gap-10 items-center justify-center'>
            <FaArrowCircleLeft onClick={clickHandler1} size={75} className='' />
            <FCard data={data} card={card}/>
            <FaArrowCircleRight onClick={clickHandler2} size={75} className=''/>
        </div>
    </div>
  )
}

export default Features