import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div className='Testimonial_page  text-black w-full max-w-screen overflow-x-hidden'>
        <Navbar /><br /><br />
        <div className='text-2xl font-bold flex justify-center items-center'>
            Testimonials
        </div>
        <div className='flex flex-wrap justify-center items-center gap-6 mt-9 '>
            <div className="bg-white rounded-lg shadow-md p-4 md:w-[600px]">
                <p className="text-xl font-semibold mb-2 text-black  ">``Renting from Car Rentals was the best decision I made on my trip! Their prices were significantly lower than other companies I checked, and the car was in excellent condition.  I saved a ton of money, which meant I could spend more on enjoying my vacation!`` </p>
                <p className="text-gray-700">Sarah J,</p>
                <p className="text-gray-700">Denver,CO</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-11 md:w-[600px]">
                <p className="text-xl font-semibold mb-2 text-black">The online booking process was so simple!  I was able to reserve the exact car I wanted in just a few minutes.  It made planning my trip so much easier. </p>
                <p className="text-gray-700">David P,</p>
                <p className="text-gray-700">Seattle, WA</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-11 md:w-[600px]">
                <p className="text-xl font-semibold mb-2 text-black"> I was impressed with the quality of the vehicle I rented from Car Rentals.  It was a newer model with all the features I needed.  I felt safe and comfortable driving it. </p>
                <p className="text-gray-700">Jessica R,</p>
                <p className="text-gray-700">London, UK</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-11 md:w-[600px]">
                <p className="text-xl font-semibold mb-2 text-black">  The compact car I rented was ideal for navigating the city streets.  It was fuel-efficient and easy to park.  It saved me a lot of time and money. </p>
                <p className="text-gray-700">Lisa G,</p>
                <p className="text-gray-700">Boston, MA</p>
            </div>


            
        </div>
        <div className='mt-6'>
        <Footer />
        </div>

    </div>
  )
}

export default page