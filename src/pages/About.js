import React from 'react'
import Section3 from '../Components/Section3'
import Feature from "../assets/Features"
import Features from "../Components/Features"

const About = () => {
  return (
    <div className=' flex flex-col justify-center items-center bg-theme-25 text-xl  mx-auto'>
        <div className='bg-theme-25 flex items-center justify-center'>
            <Section3/>
        </div>
        <div className='w-11/12 bg-theme-25 my-16'>
            <Features data={Feature}/>
        </div>
    </div>
  )
}

export default About