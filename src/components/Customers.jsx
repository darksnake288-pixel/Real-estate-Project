import React from 'react'
import Profile_1 from '/home/dark/Real estate/src/assets/profile_img_1.png'
import Profile_2 from '/home/dark/Real estate/src/assets/profile_img_2.png'
import Profile_3 from '/home/dark/Real estate/src/assets/profile_img_3.png'
const Customers = () => {
    const testimonials = [
        {
            id:1,
            name:"Donald Jackman",
            title:"Marketing Manager",
            Description:"From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
            image:Profile_1
        },
        {
            id:2,
            name:"Richard Nelson",
            title:"UI/UX Designer",
            Description:"From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
            image:Profile_2
        },
        {
            id:3,
            name:"James Washington",
            title:"CO-Founder",
            Description:"From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
            image:Profile_3
        }
    ]
  return (
    // 1. استخدام flex-col لتنسيق الأقسام رأسياً وتحذيتها في المنتصف
    <div data-aos="fade-left" className="flex flex-col items-center justify-center pt-13 mt-12 w-full ">
      
      {/* 2. العنوان الرئيسي مع الكلمة المكملة له */}
      <div className="flex items-center gap-2 mb-2">
        <h1 className="text-3xl font-semibold">Customers</h1>
        <span className="text-3xl font-light underline underline-offset-4 decoration-1">
          Testimonials
        </span>
      </div>

      {/* 3. الوصف ينزل تحت العنوان مباشرة */}
      <p className="text-center text-gray-500 max-w-md">
        Real Stories from Those Who Found Home with Us
      </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
           {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col items-center gap-2 mt-6 border-hidden p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full" />
              <h2 className="text-lg font-semibold">{testimonial.name}</h2>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
              <p className="text-center max-w-xs">{testimonial.Description}</p>
            </div>
          ))}
        </div>
    </div>
)}

export default Customers