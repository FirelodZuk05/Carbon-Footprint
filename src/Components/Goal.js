import React, { useState } from 'react'
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

import GCard from '../components/GCard'

const Goal = ({num,Info}) => {
    const [card,setCard] = useState(0);
    function clickHandler1() {
        var val=card;
        console.log(card);
        if(card>0){
            val--;
        }
        else{
            val=num-1;
        }
        setCard(val);
    }
    function clickHandler2() {
        var val=card;
        console.log(card);
        val = (val+1)%(num);
        setCard(val);
    }
  return (
    <div className='flex flex-row flex-wrap lg:flex-nowrap justify-center gap-1 items-center'>
        <FaArrowCircleLeft onClick={clickHandler1} size={75} />
        <GCard info={Info} card={card}/>
        <FaArrowCircleRight onClick={clickHandler2} size={75}/>
    </div>
  )
}

export default Goal