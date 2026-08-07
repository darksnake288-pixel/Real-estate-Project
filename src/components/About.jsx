import React from 'react'
import brandImg from '../assets/brand_img.png' // استبدلها بمسار الصورة لديك

const About = () => {
  return (
    <section data-aos='fade-left' className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id="About">
      {/* 1. العنوان والوصف العلمي */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About <span className="underline underline-offset-4 decoration-1 font-under font-normal">Our Brand</span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>

      {/* 2. المحتوى الأساسي: الصورة على اليسار والإحصائيات على اليمين */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        
        {/* قسم الصورة مع حواف منحنية من الأعلى (Arched border effect) */}
        <img 
          src={brandImg} 
          alt="Brand Building" 
          className="w-full sm:w-1/2 max-w-lg rounded-t-full object-cover shadow-lg"
        />

        {/* قسم الأرقام والتفاصيل */}
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          
          {/* شبكة الأرقام (Grid 2x2) */}
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-gray-800">10+</p>
              <p className="text-sm text-gray-500">Years of Excellence</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-gray-800">12+</p>
              <p className="text-sm text-gray-500">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-gray-800">20+</p>
              <p className="text-sm text-gray-500">Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-gray-800">25+</p>
              <p className="text-sm text-gray-500">Ongoing Projects</p>
            </div>
          </div>

          {/* النص الوصفي */}
          <p className="my-10 max-w-lg text-sm leading-relaxed text-gray-500 text-center md:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>

          {/* زر Learn More */}
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300">
            Learn more
          </button>
        </div>

      </div>
    </section>
  )
}

export default About