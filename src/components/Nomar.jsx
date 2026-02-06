import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import aboutPic from '../assets/aboutPic.JPG'


const Nomar = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>

      <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>

        <img src={aboutPic} alt='Nomar profile picture' />

      </div>

      <div className='col-span-2 px-5 my-auto'>

        <h1 className='text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold'>

          <span className="primary-color">
            Nomar Olivas
          </span> <br></br>

          <TypeAnimation
            sequence={[
              "Business Analyst",
              1000,
              "Data Analyst",
              1000,
              "IT Specialist",
              1000,
            ]}

            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <div className='my-8'>
          <a href='/' className='px-6 py-3 w-full rounded-xl mr-4     
            bg-gradient-to-br  from-blue-400 to-green-400 text-white'>
            Resume
          </a>

          <a href='#contact' className='px-6 py-3 w-full rounded-xl   
            border border-gray-400 hover:bg-gradient-to-br  from-blue-400 to-green-400
             text-white hover:border-none'>
            Contact
          </a>



        </div>





      </div>



    </div>
  )
}

export default Nomar
