import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div id='contact' className="bg-gray-900 py-10 px-5 md:py-14 md:px-32 text-white">
        <div className='flex flex-col  md:pt-10'>
            <div className='flex justify-center w-full md:flex-row flex-col gap-10 md:gap-20'>
                <div className='flex w-full flex-col font-Quicksand gap-1'>
                    <h1 className='font-bold font-Baloo2 md:text-xl'>
                        Aunt Cass Bakery
                    </h1>
                    <div className='text-gray-400'>
                        <p className='pt-3 cursor-default text-sm md:text-lg'>Happiness is a warm cookie and a cup of coffee.</p>
                        <div className='flex gap-3 pt-3'>
                            <FaFacebook className='text-lg md:text-2xl transition-all ease-out duration-150 hover:-translate-y-1 hover:text-white' />
                            <FaInstagram className='text-lg md:text-2xl transition-all ease-out duration-150 hover:-translate-y-1 hover:text-white' />
                            <FaTwitter className='text-lg md:text-2xl transition-all ease-out duration-150 hover:-translate-y-1 hover:text-white' />
                        </div>
                    </div>
                </div>

                <div className='flex w-full flex-col font-Quicksand gap-1'>
                    <h1 className='font-bold font-Baloo2 md:text-xl '>Quick Links</h1>
                    <div className='flex flex-col text-gray-400 pt-3 gap-2 text-sm md:text-lg'>
                        <a href="#home">
                            <span className=' ease-in-out duration-150 hover:text-white'>Home</span>
                        </a>
                        <a href="#about">
                            <span className=' ease-in-out duration-150 hover:text-white'>About Us</span>
                        </a>
                        <a 
                            href="https://mail.google.com/mail" 
                            target="_blank"
                        >
                            <span className=' ease-in-out duration-150 hover:text-white'>Contact</span>
                        </a>
                    </div>
                </div>

                <div className='flex w-full flex-col font-Quicksand gap-1 pb-14'>
                    <h1 className='font-bold font-Baloo2 md:text-xl '>Services</h1>
                    <div className='flex flex-col pt-3 text-gray-400 gap-2 text-sm md:text-lg'>
                        <span className=' cursor-default' >Bread</span>
                        <span className=' cursor-default' >Cupcake</span>
                        <span className=' cursor-default' >Coffee&Tea</span>
                    </div>
                </div>
            </div>

            <hr class="h-px mt-8 mb-3 bg-gray-800 border-0" />
            <span className='font-Quicksand text-gray-400 text-sm'>© 2024 Aunt Cass Bakery. All rights reserved.</span>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Footer