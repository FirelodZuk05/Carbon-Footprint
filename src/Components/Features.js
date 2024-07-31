import React, { useState } from 'react'
import FCard from "./FCard"
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Features = ({data}) => {
  
  const [fcard,setFcard] = useState(0);
  function clickHandler1() {
    var val=fcard;
    console.log(fcard);
    if(fcard>0){
        val--;
    }
    else{
        val=5;
    }
    setFcard(val);
}
function clickHandler2() {
    var val=fcard;
    console.log(fcard);
    val = (val+1)%6;
    setFcard(val);
}

  return (
    <div className='flex flex-col gap-10 mb-4'>
        <p className='text-5xl ml-20'>Features provided by Us:</p>
        <div className='flex gap-10 items-center justify-center'>
            <FaArrowCircleLeft onClick={clickHandler1} size={75} className='' />
            <FCard data={data} card={fcard}/>
            <FaArrowCircleRight onClick={clickHandler2} size={75} className=''/>
        </div>
    </div>
  )
}

export default Features