import React from 'react'
import aboutPic from '../assets/aboutPic.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id="about">

        <div className=' md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        Welcome! I’m Nomar 👋
I’m a data and business analyst focused on uncovering insights, improving processes, and helping organizations make data-driven decisions. My work combines analytical skills, business understanding, and clear communication to turn data into impact. Explore my projects below!
                    </p>
                </div>
            </div>

            <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutPic} width={300} height={300} alt='Nomar2'/>



        </div>
    </div>
  )
}

export default About