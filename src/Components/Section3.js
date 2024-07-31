import React from 'react'

const Section3 = () => {
  return (
    <div className='w-10/12 flex flex-col gap-8 border-2 border-theme-25 rounded-md mt-4 mb-4 bg-theme-25 p-4 shadow-2xl shadow-black'>
        <p className='text-5xl'>What is Sustainify ?</p>
        <div className='text-xl'>A Sustainable Future Hub that is a dynamic and inclusive platform for improving knowledge and 
capacity of people in the key themes of sustainable development, with affordable and clean energy 
and climate action. This is a platform that aims at raising awareness, offering tools for work, and 
capacitating communities into sustainable practices. The creation of the Sustainable Future Hub 
would provide educational materials, interactive features, and monitoring tools to materialize 
actions toward a more sustainable future.</div>

        <p className='text-5xl'>Objectives :</p>
        <ul className='flex justify-evenly items-center'>
            <li className='w-[15%] h-[280px] p-2 font-serif text-lg flex flex-col justify-between items-center rounded-md border-theme-700 bg-theme-600 border-2 shadow-theme-600 shadow-2xl'> <span className='text-xl font-sans'>Clean Energy Education:</span><span> It would provide all information about inexpensive and clean energy 
            with a prime focus on solar energy.</span>  </li>
            <li className='w-[15%] h-[280px] p-2 font-serif text-lg flex flex-col justify-between items-center rounded-md border-theme-700 bg-theme-600 border-2 shadow-theme-600 shadow-2xl'><span className='text-xl font-sans'> Climate Action: </span><span>Create awareness about carbon emissions, their effects, and how every single 
            person can contribute by reducing their carbon footprint. </span> </li>
            <li className='w-[15%] h-[280px] p-2 font-serif text-lg flex flex-col justify-between items-center rounded-md border-theme-700 bg-theme-600 border-2 shadow-theme-600 shadow-2xl'><span className='text-xl font-sans'>Empowerment:</span><span> Provide users with the tools and resources necessary for effective action toward 
            a more livable future. </span> </li>
            <li className='w-[15%] h-[280px] p-2 font-serif text-lg flex flex-col justify-between items-center rounded-md border-theme-700 bg-theme-600 border-2 shadow-theme-600 shadow-2xl'> <span className='text-xl font-sans'>Facilitate community engagement: </span><span>Building a community of like-minded individuals committed to sustainability and climate action.</span></li>
        </ul>
    </div>
  )
}

export default Section3