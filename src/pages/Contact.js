import React from 'react'

import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import Form from '../Components/Form'
import Footer from '../Components/Footer'

import { FaWpforms } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { MdAttachEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <Card
            card={0}
            Icon={FaWpforms}
            dir={0}
            title="Fill out the form below :"
            Desc={<Form/>}
            last={1}
        />
        <Card
            card={1}
            Icon={SiMinutemailer}
            dir={1}
            title="Contact details :"
            Desc={<div className='ml-8 flex flex-col gap-5'>
                <div className='flex flex-row gap-5'>
                    <FaPhone className={`text-purple-500 text-[2rem] lg:text-[3rem]`}/>
                    <div>1234567890</div>
                </div>
                <div className='flex flex-row gap-5'>
                    <MdAttachEmail className={`text-purple-500 text-[2rem] lg:text-[3rem]`}/>
                    <div>Sustainify-help@gmail.com</div>
                </div>
            </div>}
            last={1}
        />
        <Footer/>
    </div>
  )
}

export default Contact