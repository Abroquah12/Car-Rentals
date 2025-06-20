'use client';
import React, { useState } from 'react'
import Link from 'next/link';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

        const toggleNavbar = () =>{
            setIsOpen(!isOpen);
        };
      return (
        <div className="car_rental_page">
          <div className="bg-red-400 md:p-0 md:m-0 md:flex md:justify-evenly md:items-center fixed w-full  top-0">
            <div>
            
              <h1>Car Rentals</h1>
              <p>Want a ride</p>
            </div>
    
            <div className=" hidden md:flex md:justify-center md:items-center md:gap-3 md:cursor-pointer">
              <Link
                href="/"
                className="hover:bg-green-400 active:bg-red-700 rounded-lg p-[6px]"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:bg-green-400 active:bg-red-700 rounded-lg p-[6px]"
              >
                About
              </Link>
              <Link
                href="/Vehicle_Model"
                className="hover:bg-green-400 active:bg-red-700 rounded-lg p-[6px]"
              >
                Vehicle Model
              </Link>
              <Link
                href="/Testimonial"
                className="hover:bg-green-400 active:bg-red-700 rounded-lg p-[6px]"
              >
                Testimonials
              </Link>
              <Link
                href="/Contact"
                className="hover:bg-green-400 active:bg-red-700 rounded-lg p-[6px]"
              >
                Contact
              </Link>
            </div>
            <div className="flex gap-3 ">
              <Link
               href ='/Login'
              >
                <button className="hidden md:flex bg-green-400 p-[6px] rounded-lg cursor-pointer">
                 Login
              </button>
              </Link>
              <Link
              href='/Register'>
              <button className="hidden md:flex bg-green-400 p-[6px] rounded-lg cursor-pointer">
                Register
              </button>
              </Link>

              <button className='absolute right-0 top-1 flex justify-center items-center md:hidden' onClick={toggleNavbar}>&#9776;</button>
            </div>

            {isOpen &&(
              <div className=" flex flex-col justify-center items-center gap-2 absolute top-5 bg-red-400 w-full md:hidden">
              <Link
                href="/"
                className="hover:bg-green-400 active:bg-red-700 rounded-lg p-[6px]"
              >
                Home
              </Link>
              <Link
                href="/About"
                className="hover:bg-green-400 active:bg-red-700 rounded-lg p-[6px]"
              >
                About
              </Link>
              <Link
                href="/Vehicle_Model"
                className="hover:bg-green-400 active:bg-red-700 rounded-lg p-[6px]"
              >
                Vehicle Model
              </Link>
              <Link
                href="/Testimonial"
                className="hover:bg-green-400 active:bg-red-700 rounded-lg p-[6px]"
              >
                Testimonials
              </Link>
              <Link
                href="/Contact"
                className="hover:bg-green-400 active:bg-red-700 rounded-lg p-[6px]"
              >
                Contact
              </Link>
              <Link
               href ='/Login'
              >
                <button>
                 Login
              </button>
              </Link>
              <Link
              href='/Register'>
              <button >
                Register
              </button>
              </Link>
            </div>
            
            

            )}
          </div>
    
         
        </div>
  )
}

export default Navbar;
