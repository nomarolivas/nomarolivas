import React from 'react'
import excel from '../assets/excel.png'
import sql from '../assets/sql.png'
import tableau from '../assets/tableau.png'
import python from '../assets/python.png'
import java from '../assets/java.png'

const Skills = () => {
  return (
    <div className='bg-blue-300 text-gray-400 md:h-[150px] max-w-[1200px] mx-auto
                            grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center'>
        

        <h2 className=' text-gray-700 text-2xl md:text-4xl font-bold m-4'>
            My <br/> Tech <br/> Stack
        </h2>


        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={excel} alt=''></img>
            <p className='mt-2'>Excel</p>
            
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={sql} alt=''></img>
            <p className='mt-2'>SQL</p>
            
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={tableau} alt=''></img>
            <p className='mt-2'>Tableau</p>
            
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={python} alt=''></img>
            <p className='mt-2'>Python</p>
            
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={java} alt=''></img>
            <p className='mt-2'>Java</p>
            
        </div>



    </div>
  )
}

export default Skills