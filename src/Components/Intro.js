import React from 'react'

const Intro = () => {
  return (
    <div className='flex flex-col justify-center w-10/12 items-center mt-6 mb-5 mx-auto'>

        <div className='flex  items-end justify-center' >
            <h1 className='font-serif text-3xl font-bold text-theme-900'>
                Sustainability
            </h1>
            
        </div>
        <div className='flex gap-5 items-center justify-center'>
            <img src='https://www.conserve-energy-future.com/wp-content/uploads/2014/10/environmental-friendly-sustainable-eco-friendly.jpg' alt='Not Found' height={200} width={200}/>
            <p className='font-serif text-xl text-theme-900'>
            Sustainability is the practice of meeting current needs without compromising the ability of future generations to meet theirs. It encompasses environmental, economic, and social dimensions, focusing on preserving natural resources, reducing pollution, and promoting equitable growth to ensure a balanced, healthy planet for all living beings.
            </p>
        </div>

    </div>
  )
}

export default Intro