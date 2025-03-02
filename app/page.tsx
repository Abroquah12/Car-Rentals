import React from 'react'
import Navbar from './components/Navbar'
import Image from 'next/image'
import car4 from './Image/car4.png'
import icons8 from '../app/icons/icons8.png'
import iuser from '../app/icons/iuser.png'
import icar from '../app/icons/icar.png'
import car2 from '../app/Image/car2.png'
import car3 from '../app/Image/car3.png'
import car1 from '../app/Image/car1.png'
import Footer from './components/Footer'




const page = () => {
  return (
    <div className='car_rental_page'>
      <Navbar />

      <div className='block md:flex md:justify-evenly md:items-center'>
        <div>
        <Image
        src={car4}
        alt="Picture of a car"
        width={400}
        height={100}
        className='mt-14'
       />
          
    
        </div>
        <div>
          <h1 className='text-xl font-bold'>Freedom on the Road. Rent a Car with Us!</h1>

          <p className='mt-9'>Looking for reliable and affordable car rentals? 
            Look no further!</p>
             We offer a wide selection of vehicles to suit 
            your needs, from compact cars to SUVs.
             <p> Book online today and enjoy special discounts!</p>

             <button className='flex justify-center items-center h-6 w-[120px] bg-red-400 rounded-md mt-10 p-4'>
              Book Ride
              </button>

        </div>


      </div>
      <div className='block  md:flex md:justify-center md:items-center md:gap-10 md:mt-5'>
        <div>

          <Image
          src={icons8}
          alt="Picture of a car"
          width={40}
          height={100}
          />

          <h1 className='font-bold text-lg mt-1'>Select a car</h1>
          <p className='mt-3'>Match Your Needs: Browse </p>
          <p>our fleet and select the car</p>
          <p>that fits your trip and budget.</p>
       </div>

       <div>
          <Image
          src={iuser}
          alt="Picture of a user"
          width={40}
          height={100} 
           />
          <h1 className='font-bold text-lg mt-1'>Contact Operator</h1>

       
          <p className='mt-3'>Match Your Needs: Browse </p>
          <p>our fleet and select the car</p>
          <p>that fits your trip and budget.</p>
        </div>

        <div>
        <Image
          src={icar}
          alt="Picture of a car"
          width={40}
          height={100} 
           />
          <h1 className='font-bold text-lg mt-1'> Lets drive</h1>

       
          <p className='mt-3'>Match Your Needs: Browse </p>
          <p>our fleet and select the car</p>
          <p>that fits your trip and budget.</p>

        </div>


          
      </div>
      
      <div className=' block md:flex  md:justify-center md:items-center'>
        <Image
        src={car2}
        alt="Picture of a car"
        width={500}
        height={100}
       />

        <Image
        src={car3}
        alt="Picture of a car"
        width={500}
        height={100}
       />

        <Image
        src={car1}
        alt="Picture of a car"
        width={500}
        height={100}
       />

        </div>
      
      <Footer />
      
    </div>
  )
}

export default page