import React from 'react'
import Intro from "../Components/Intro"
import Info  from "../assets/data"
import Card from "../Components/Card"

const Home = () => {
  return (
    <div className=' flex flex-col justify-center items-center bg-theme-800 text-xl  mx-auto'>
        {/* Section 1: Introduction */}
            <Intro/>
        <p className='text-theme-900 text-5xl'>Sustainability Goals</p>
        <div className=' flex flex-wrap justify-center gap-3 w-11/12 text-xl items-center mx-auto'>
            {/* Section 2: Cards */ 
                Info.map((info, index) => {
                    return <Card info={info} />;
                })
            }  
        </div>
    </div>
  )
}

export default Home