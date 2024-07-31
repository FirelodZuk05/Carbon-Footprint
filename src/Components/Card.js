import React from 'react'

const Card = ({Icon,dir,title,Desc,card,last}) => {
  return (
    <div className={`flex  ${dir===0?"flex-col lg:flex-row":"flex-col-reverse lg:flex-row-reverse"}  h-auto lg:h-[70vh] justify-between items-center border-2 rounded-lg shadow-xl border-green-500 overflow-hidden bg-white bg-opacity-30 backdrop-blur-3xl  ${card===0?"mt-20":"my-10"}`} >
        <div className=' ml-4 flex flex-col h-auto lg:h-5/6 w-full lg:w-[48vw] justify-evenly gap-5 items-start'>
            <div className='flex items-center space-x-4'>
                <h1 className='text-3xl lg:text-5xl font-bold'>{title}</h1>
            </div>
            <p className='text-base lg:text-lg'>
               {Desc}
            </p>
        </div>
        <div className={`${dir===0?"bg-gradient-to-r from-white to-green-500":"bg-gradient-to-r to-white from-green-500"} flex h-[30vh] lg:h-[100vh] w-full lg:w-[48vw]  justify-center items-center`}>
            <Icon className={`text-green-500 lg:text-white text-[5rem] lg:text-[10rem]`}/>
        </div>
    </div>
  )
}

export default Card