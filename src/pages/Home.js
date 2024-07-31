import React, { useState } from 'react'
import Intro from "../Components/Intro"
import Info  from "../assets/data"
import Section3 from "../Components/Section3"
import Features from "../Components/Features"
import Feature from "../assets/Features"
import Card from "../Components/Card"
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Home = () => {

    const [card,setCard] = useState(0);
    const [fcard,setFcard] = useState(0);
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
    function clickHandler3() {
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
    function clickHandler4() {
        var val=fcard;
        console.log(fcard);
        val = (val+1)%6;
        setFcard(val);
    }

  return (
    <div className=' flex flex-col justify-center items-center bg-theme-25 text-xl  mx-auto'>
        
        {/* Section 1: Introduction */}
            <Intro/>
        {/* Section 2: Cards */ }
        <div className=' flex flex-col justify-center gap-5  mx-auto text-xl items-center relative mt-9 mb-9'>
            <p className='text-theme-900 text-5xl'>Sustainability Goals</p>
                {/* Info.map((info, index) => {
                    return <Card info={info} />;
                }) */}
            <FaArrowCircleLeft onClick={clickHandler1} size={75} className='absolute translate-y-3 -translate-x-64' />
            {console.log(card)}
            <Card info={Info} card={card}/>
            <FaArrowCircleRight onClick={clickHandler2} size={75} className='absolute translate-y-3 translate-x-64'/>
             
        </div>
        {/* Section 3: Sustainify */}
        <div className='bg-theme-25 flex items-center justify-center'>
            <Section3/>
        </div>
        {/* Section 4: Features */}
        <div className='w-11/12 bg-theme-25 my-14'>
            <Features data={Feature} card={fcard} clickHandler1={clickHandler3} clickHandler2={clickHandler4}/>
        </div>
    </div>
  )
}

export default Home