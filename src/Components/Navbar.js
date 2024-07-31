import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full bg-theme-900 flex items-center justify-center mt-5 mb-5'>
      <nav className='text-theme-25 flex justify-between items-center w-11/12 max-w-[1360px]' >
        <h1 className=' text-3xl font-serif font-medium'>Sustainify</h1>
        <ul className='flex gap-5 text-theme-25 hover:cursor-pointer'>
          <li className='hover:text-theme-600'> <Link to="/">Home</Link></li>
          <li className='hover:text-theme-600'><Link to="/about">About</Link></li>
          <li className='hover:text-theme-600'><Link to="/contact-us">Contact Us</Link></li>
          <li className='hover:text-theme-600'><Link to="/energy-calculator">Energy Calculator</Link></li>
          <li className='hover:text-theme-600'><Link to="/carbon-footprint-calculator">Carbon footprint Caculator</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar