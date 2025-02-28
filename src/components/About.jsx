import React from 'react'
import aboutPic from '../assets/aboutPic.JPG'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id="about">

        <div className=' md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>

            <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutPic} width={300} height={300} alt='Nomar2'/>



        </div>
    </div>
  )
}

export default About