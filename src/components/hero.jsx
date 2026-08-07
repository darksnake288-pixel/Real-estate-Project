import React from 'react'
import Navbar from './Navbar'
import backgroundImage from '../assets/header_img.png'


const Hero = () => {
  return (
    <section className="hero relative w-screen h-screen overflow-hidden">
    <img src={backgroundImage} alt="Background" className="absolute inset-0 object-cover w-full h-full -z-10" />  
    <Navbar />
    <div data-aos="fade-up" className="flex flex-col items-center justify-center h-full text-center px-4 md:px-8 lg:px-16">
      {/**Words center page */}
      <h1 className='text-white md:text-5xl font-semibold md:w-175  md:text-[82px] sm:text-6xl space-y-5 '>Explore Homes That Fit Your Dreams</h1>
      <div className='flex flex-row md:flex-row gap-4 mt-8'>
        {/**buttons */}
        <button className='border-amber-50 border rounded-2xl text-white px-8 py-3 hover:bg-white hover:text-black active:scale-95 transition delay-150 ease-in-out duration-150'>Projects</button>
        <button className=' bg-blue-600 text-white px-8 py-4 rounded-2xl hover:bg-blue-700 active:scale-95 transition delay-150 ease-in-out duration-150'>Contact us</button>
      </div>
    </div>
    </section>
  
)}

export default Hero
