import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import car1 from '../Image/car1.png'
import car6 from '../Image/car6.png'
import Footer from '../components/Footer'


const page = () => {
  return (
    <div className='about_page bg-blue-950 text-white'>
        <Navbar /><br /><br />
        <div className='flex justify-center items-center font-bold text-2xl'>
            <h1>Brief History in Car Rentals</h1>
        </div>

        <div className='block md:flex md:justify-evenly md:items-center'>
            <div>
                <Image
                src={car1}
                alt="Picture of a car"
                 width={600}
                height={100}
                />
            </div>
            <div>
                <p>The car rental industry has a fascinating history, evolving from humble beginnings to a global</p>
                    <p> powerhouse.  It`s a story of innovation, adaptation, and the ever-growing need for flexible </p>
                        <p>transportation.</p>

                        <h1 className='text-2xl mt-10 font-bold'>Early Days: From Horsepower to Horsepower</h1>
            </div>
        </div>
        <div className='block md:flex md:justify-evenly md:items-center md:mt-[-300px] md:ml-4'>
            <div>
                <p>The car rental industry has mirrored the evolution of the automobile and the  </p>
                    <p>changing landscape of travel. It plays a vital role in modern transportation, </p>
                        <p> providing  alike. flexibility and convenience for individuals and businesses.   </p>
                        <p>  Technology continues to drive innovation, with online booking, mobile apps, and  </p>
                         <p> emerging services shaping the future of car rentals. From horse-drawn</p>
                         <p> carriages to electric vehicles, the story of car rentals is a testament to</p>
                         <p> human ingenuity and the enduring need for mobility.</p>
            </div>
            <div>
                <Image
                src={car6}
                alt="Picture of a car"
                 width={600}
                height={100}
                />
            </div>
        </div>

        <div className='flex flex-col justify-center items-center gap-5'>
            <h1 className='text-2xl font-bold'>Why Choose Us</h1>
            <h2 className='text-xl font-bold'>Value and Price:</h2>
            <p>Competitive Rates: We offer some of the most competitive rates in the market.  We`re confident you`ll find a great deal with us.</p>
            <p>Price Match Guarantee (if offered): If you find a lower price for the same car elsewhere, We`ll match it.</p>

            <h2  className='text-xl font-bold'>Selection and Convenience:</h2>
            <p>Wide Variety of Vehicles: We have a large fleet of vehicles to choose from, whether you need a </p>
            <p>compact car for city driving, a spacious SUV for a family vacation, or a luxury car for a special occasion.</p>

            <h2 className='text-xl font-bold'>Quality and Reliability:</h2>
            <p>Well-Maintained Vehicles: `Our cars are regularly serviced and maintained to ensure your safety and comfort.`</p>
            <p>24/7 Roadside Assistance: `We offer 24/7 roadside assistance, so you can have peace of mind knowing that help is just a phone call away.`</p>

        </div>
        <div className='mt-6'>
       <Footer />
       </div>
    </div>
  )
}

export default page