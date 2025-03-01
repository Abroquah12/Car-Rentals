import React from 'react'




const Footer = () => {
  return (
    <div className='flex justify-evenly items-center bg-red-400 p-4 '>
        <div className='flex flex-col mt-8'>
            <h1 className='font-bold text-lg'>Working Hours</h1>
            <p className='mt-5'>Mon-Fri: 8:00am - 10:00pm</p>
            <p>Sat: 9:00am - 8:00pm</p>
            <p>Sun: closed</p>
        </div>

        <div className='flex flex-col mt-8'>
            <h1 className='font-bold text-lg'>Subscription</h1>
            <p className='mt-5'>Subscribe with your email to get the</p>
            <p>latest update / news from us</p>
            <input type="text" placeholder='Enter Your Email......' className='rounded-sm mt-3 p-3'/>
            <button className='bg-green-400 rounded-md p-1 mt-2 text-white'>Subscribe</button>
        </div>

        <div className='flex flex-col mt-8'>
            <h1 className='font-bold text-lg'>Contact</h1>
            <p>Phone: (123) 456789</p>
            <p>example@gmail.com</p>
       

        </div>
    </div>
  )
}

export default Footer