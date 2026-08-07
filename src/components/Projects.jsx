import React from 'react'
import Project_1 from '/home/dark/Real estate/src/assets/project_img_1.jpg'
import Project_2 from '/home/dark/Real estate/src/assets/project_img_2.jpg'
import Project_3 from '/home/dark/Real estate/src/assets/project_img_3.jpg'
import Project_4 from '/home/dark/Real estate/src/assets/project_img_4.jpg'
import Project_5 from '/home/dark/Real estate/src/assets/project_img_5.jpg'
import Project_6 from '/home/dark/Real estate/src/assets/project_img_6.jpg'
const Projects = () => {
    const projects = [
        {
            id:1,
            title:'Skyline Haven',
            Price : '$2,500,000 | California',
            image: Project_1
        },
        {
            id:2,
            title:'Vista Verde',
            Price : '$2,500,000 | San Francisco',
            image: Project_2
        },
        {
            id:3,
            title:'Serenity Suits',
            Price : '$2,500,000 | Chicago',
            image: Project_3
        },
        {
            id:4,
            title:'Central Square',
            Price : '$2,500,000 | Los Angeles',
            image: Project_4
        },
        {
            id:5,
            title:'Vista Verde',
            Price : '$2,500,000 | San Francisco',
            image: Project_5
        },
        {
            id:6,
            title:'Serenity Suits',
            Price : '$2,500,000 | Chicago',
            image: Project_6
        }
    ]
  return (
    <section data-aos="fade-right" className='flex flex-col items-center px-6 py-10 justify-center gap-4'>
      <div className='flex flex-col gap-2 text-center'>
        {/**Add Title */}
        <h1 className='font-bold text-2xl sm:text-4xl '>Projects</h1>
        <span className='font-light underline underline-offset-4 font-under decoration-1 text-2xl sm:text-4xl '>Completed</span>
        {/**Describition */}
        <p className='text-gray-500 max-w-80 text-center mt-2 mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {projects.map((project) => (
          <div key={project.id} className='flex flex-col gap-2'>
            <img src={project.image} alt={project.title} className='w-full h-64 object-cover rounded-lg' />
            <h2 className='font-semibold text-lg'>{project.title}</h2>
            <p className='text-gray-500'>{project.Price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
