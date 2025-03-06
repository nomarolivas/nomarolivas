import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">

        <div className='text-center'>
            <h2 className='text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
        </div>

        <div className='max-w-[800px] mx-auto'>
            <div className='mt-6 bg-[161616] rounded-xl'>
                <div className='p-10'>
                    <form action="#"  method='POST'>
                        <div>
                            <div className='mt-2.5 relative'>
                                <input type="text" name='' id='' placeholder='Your Name'
                                    className='bg-[161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                        border-gray-700 rounded-md focus-md focus:outline-none focus:border-pink-600'/>
                            </div>
                        </div>

                        <div>
                            <div className='mt-2.5 relative'>
                                <input type="text" name='' id='' placeholder='Your Email'
                                    className='bg-[161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                        border-gray-700 rounded-md focus-md focus:outline-none focus:border-pink-600'/>
                            </div>
                        </div>

                        <div>
                            <div className='mt-2.5 relative'>
                                <input type="text" name='' id='' placeholder='Your Message'
                                    className='bg-[161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                        border-gray-700 rounded-md focus-md focus:outline-none focus:border-pink-600'/>
                            </div>
                        </div>





                    </form>
                




                </div>


            </div>


        </div>




    </div>
  )
}

export default Contact