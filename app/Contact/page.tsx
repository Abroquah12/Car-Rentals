'use client';
import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import phone from '../icons/phone.png'
import iuser from '../icons/iuser.png'
import Footer from '../components/Footer'

const page = () => {
    const Message = () => {
        window.alert("Message Received Successfully")
    }
  return (
    <div className='Contact_page'>
        <Navbar /><br /><br /><br />
        <div>
            <h1 className='font-bold text-2xl flex justify-center items-center'>Contact Us Here</h1>
        </div>
        <div className=' block md:flex md:justify-evenly md:items-center mt-40'>
            <div className='flex flex-col gap-6 mt-[-120px]'>
                <p>Need Some Additional Information?</p>

                <div>
                <p>A multifaceted professional skilled in multiple fields of research, </p>
                <p>development as well as a learning specialist. Over 15 years of experience.</p>
                </div>

                <Image
                src={phone}
                alt="Picture of a phone"
                 width={30}
                height={50}
                />
                <p>(123) 456789</p>

                <Image
                src={iuser}
                alt="Picture of a user"
                 width={30}
                height={50}
                />
                <p>example@gmail.com</p>

            </div>

            <div className='flex flex-col gap-10'>
                <h2>Full Name</h2>
                <input type="text" placeholder='A.K Dion' className='border border-gray-300 rounded px-4 py-2'  />

                <h2>Email Address</h2>
                <input type="text" placeholder='example@gmail.com' className='border border-gray-300 rounded px-4 py-2'/>
                
                <h2>Enter Message</h2>
                <input type="text" placeholder='I want help.......'  className='w-[250px] h-[100px] border border-gray-300 rounded px-4 py-2'/>

                <button className='rounded-md bg-red-400 p-5' onClick={Message}>Send Message......</button>


            </div>

        </div>

        <div className='mt-10'>
        <Footer />
        </div>
    </div>
  )
}

export default page