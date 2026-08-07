import React, { useState } from 'react'
import Logo from '../assets/favicon.svg'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const serviceData = [
        { id: 1, title: 'Home', link: '#' },
        { id: 2, title: 'About', link: '#' },
        { id: 3, title: 'Projects', link: '#' },
        { id: 4, title: 'Testimonials', link: '#' }
    ]

  return (
    <nav  className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 md:px-12 bg-transparent z-50">
      {/* 1. اللوجو والاسم */}
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Logo" className="w-8 h-8 md:w-10 md:h-10" />
        <h1 className="text-white text-2xl md:text-3xl font-bold">Estate</h1>
      </div>

      {/* 2. اللينكات للشاشات المتوسطة والكبيرة (مخفية في الموبايل hidden md:flex) */}
      <div className="hidden md:flex">
        <ul className="flex space-x-6 lg:space-x-8">
            {serviceData.map((item) => (
                <li key={item.id}>
                    <a href={item.link} className="text-white hover:text-gray-300 transition-colors font-medium">
                      {item.title}
                    </a>
                </li>
            ))}
        </ul>
      </div>

      {/* 3. الزرار للاب توب (مخفي في الموبايل) */}
      <div className="hidden md:block">
        <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors active:scale-95">
          Sign Up
        </button>
      </div>

      {/* 4. زر الـ Burger Menu للموبايل فقط (md:hidden) */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 5. قائمة الموبايل القابلة للفتح والغيلاق */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full backdrop-blur-md p-6 flex flex-col items-center space-y-4 md:hidden transition-all">
          <ul className="flex flex-col items-center space-y-4">
              {serviceData.map((item) => (
                  <li key={item.id}>
                      <a 
                        href={item.link} 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white text-lg hover:text-gray-300"
                      >
                        {item.title}
                      </a>
                  </li>
              ))}
          </ul>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium w-full max-w-xs">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar