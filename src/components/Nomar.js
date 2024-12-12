import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import profilePicture from '../assets/profilePicture.JPG'


const Nomar = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] h-[70vh] mx-auto py-8 bg-black'>

        <div className='my-auto mx-auto'>

            <div className='w-[300px] h-auto lg:w-[400px]'>
                <img src={profilePicture} alt='Nomar profile picture'></img>

            </div>

        </div>

        <div className='col-span-2 px-5'>
            


        </div>
      
    </div>
  )
}

export default Nomar
