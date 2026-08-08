import React from 'react'
import Logo from '../assets/favicon.svg' // استبدل المسار بحسب مكان اللوجو لديك

const Footer = () => {
  return (
    <footer className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden" id="Footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
        
        {/* 1. قسم اللوجو والوصف */}
        <div className="w-full md:w-1/3">
          <div className="flex items-center space-x-2 mb-4">
            <img src={Logo} alt="Logo" className="w-8 h-8" />
            <span className="text-white text-2xl font-bold">Estate</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* 2. قسم روابط الشركة (Company Links) */}
        <div className="w-full md:w-1/5">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li><a href="#Header" className="hover:text-white transition">Home</a></li>
            <li><a href="#About" className="hover:text-white transition">About us</a></li>
            <li><a href="#Contact" className="hover:text-white transition">Contact us</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy policy</a></li>
          </ul>
        </div>

        {/* 3. قسم النشرة البريدية (Newsletter) */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Subscribe to our newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2.5 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-blue-500 w-full text-sm"
            />
            <button className="py-2.5 px-4 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition text-sm">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* خط الفصل والتذييل السخلي */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        Copyright 2024 © GreatStack. All Right Reserved.
      </div>
    </footer>
  )
}

export default Footer
