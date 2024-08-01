import React from 'react'

const Form = () => {
  return (
    <form className='flex flex-col border-2 gap-5 w-[10rem] sm-[25rem] md:w-[25rem] lg:w-[25rem] p-3 rounded-md shadow-inner border-green-500  shadow-green-500 bg-gradient-to-r from-green-500 to-white'>
              <div className='flex flex-col lg:flex-row justify-between text-gray-800 uppercase'>
                <label htmlFor="username">Username :</label>
                <input type="text" name="username" id="username" autoComplete='off' required className='border-black border-2 rounded-md'/>
              </div>
              <div className='flex flex-col lg:flex-row justify-between text-gray-800 uppercase'>
                <label htmlFor="email">Email :</label>
                <input type="email" name="email"  id="email" autoComplete='off' required className='border-black border-2 rounded-md'/>
              </div>
              <div className='flex flex-col lg:flex-row justify-between text-gray-800 uppercase'>
                <label htmlFor="message">Message :</label>
                <textarea name="message" id="message" cols="25" rows="6" className='border-black border-2 rounded-md'></textarea>
              </div>

              <div className='w-full flex justify-center items-center text-gray-800 '>
                <button type="submit" className='border-2 uppercase border-green-500 shadow-2xl shadow-black bg-green-200 px-3 rounded-md'>submit</button>
              </div>
    </form>
  )
}

export default Form