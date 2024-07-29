import React from 'react'

function Navbar() {
  return (
    <div className='w-full bg-theme-900 flex items-center justify-center mt-5 mb-5'>
      <nav className='text-theme-25 flex justify-between items-center w-11/12 max-w-[1360px]' >
        <h1 className=' text-3xl font-serif font-medium'>Sustainify</h1>
        <ul className='flex gap-5 text-theme-25 hover:cursor-pointer'>
          <li className='hover:text-theme-600'>Home</li>
          <li className='hover:text-theme-600'>About</li>
          <li className='hover:text-theme-600'>Contact Us</li>
          <li className='hover:text-theme-600'>Energy Calculator</li>
          <li className='hover:text-theme-600'>Carbon footprint Caculator</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar