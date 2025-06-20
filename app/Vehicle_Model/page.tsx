import Image from 'next/image';
import car1 from '../Image/car1.png'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Home() {
  const carData = [
    {
      image: { car1 }, // Replace with your image path
      name: 'Audi A3',
      price: 75,
      type: 'Sedan',
      seats: 5,
      luggage: 2,
    },
    {
      image: '/audi-a3-blue.jpg', // Replace with your image path
      name: 'Audi A3',
      price: 75,
      type: 'Sedan',
      seats: 5,
      luggage: 2,
    },
    {
      image: '/audi-a3-white.jpg', // Replace with your image path
      name: 'Audi A3',
      price: 75,
      type: 'Sedan',
      seats: 5,
      luggage: 2,
    },
    {
        image: '/audi-a3-white.jpg', // Replace with your image path
        name: 'Audi A3',
        price: 75,
        type: 'Sedan',
        seats: 5,
        luggage: 2,
      },
      {
        image: '/audi-a3-white.jpg', // Replace with your image path
        name: 'Audi A3',
        price: 75,
        type: 'Sedan',
        seats: 5,
        luggage: 2,
      },
      {
        image: '/audi-a3-white.jpg', // Replace with your image path
        name: 'Audi A3',
        price: 75,
        type: 'Sedan',
        seats: 5,
        luggage: 2,
      },
  ];

  return (
    <div className=' text-black w-full max-w-screen overflow-x-hidden'>
      <Navbar /><br />

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-wrap justify-center max-w-6xl mt-6 sm:w-full">
          {carData.map((car, index) => (
            <div key={index} className="m-4 p-6 text-left border w-80 rounded-xl transition-colors hover:border-blue-500">
              <Image 
                src={car1} 
                alt={car.name} 
                width={384} // Replace with your image width
                height={192} // Replace with your image height
                className="w-full h-48 object-cover rounded-md mb-4" 
              />
              <h3 className="text-2xl font-bold">{car.name}</h3>
              <p className="mt-2 text-xl">$ {car.price} <span className="text-sm">per day</span></p>
              <div className="mt-4">
                {/* ... (rest of the car details) ... */}
              </div>
              <button className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full">
                Book Ride {/* ... (rest of the button content) ... */}
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}