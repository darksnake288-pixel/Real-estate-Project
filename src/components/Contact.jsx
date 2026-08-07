import React from 'react'

const Contact = () => {
  return (
    <div data-aos="fade-right" className="flex flex-col items-center justify-center pt-13 mt-12 w-full ">
      <div className="flex items-center mb-2 gap-2">
        {/**Text in Center page */}
        <h1 className='text-3xl font-semibold'>Contact</h1>
        <span className='text-3xl font-light underline underline-offset-4 decoration-1'>With US</span>
      </div>
        <p className='text-center text-gray-500 max-w-md'>Ready to Make a Move? Let’s Build Your Future Together</p>
        <div className='flex flex-col items-center justify-center w-full mb-3'>
            {/**Contact Form */}
            <form className='flex flex-wrap gap-4 mt-8 w-full max-w-md'>
              <label id='Name'>Your Name</label>
              <input type="text" placeholder='Enter Your Name' className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
              <label id='Email'>Your Email</label>
              <input type="email" placeholder='Enter Your Email' className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
              <label id='Message'>Message</label>
              <input type="text" placeholder='Enter Your Message' className='w-full h-75 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
              <button type='submit' className="bg-blue-600 text-white p-3 border-hidden shadow-2xl rounded-xl hover:bg-blue-700 active:scale-95 active:duration-100 active:transition">Send Message</button>
            </form>
                
        </div>
    </div>
  )
}

export default Contact
