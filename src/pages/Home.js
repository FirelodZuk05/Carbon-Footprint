import React, { useState } from 'react'
import Intro from "../Components/Intro"
import Info  from "../assets/data"
import Card from "../Components/Card"
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Home = () => {

    const [card,setCard] = useState(10);
    function clickHandler1() {
        var val=card;
        console.log(card);
        if(card>0){
            val--;
        }
        else{
            val=16;
        }
        setCard(val);
    }
    function clickHandler2() {
        var val=card;
        console.log(card);
        val = (val+1)%17;
        setCard(val);
    }

  return (
    <div className=' flex flex-col justify-center items-center bg-theme-800 text-xl  mx-auto'>
        {/* Section 1: Introduction */}
            <Intro/>
        <p className='text-theme-900 text-5xl'>Sustainability Goals</p>
        <div className=' flex justify-center gap-5  text-xl items-center relative'>
            {/* Section 2: Cards */ }
                {/* Info.map((info, index) => {
                    return <Card info={info} />;
                }) */}
            <FaArrowCircleLeft onClick={clickHandler1} size={50} className='absolute translate-y-3 -translate-x-64' />
            {console.log(card)}
            <Card info={Info} card={card}/>
            <FaArrowCircleRight onClick={clickHandler2} size={50} className='absolute translate-y-3 translate-x-64'/>
             
        </div>
    </div>
  )
}

export default Home