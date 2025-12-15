import React from 'react'
import { BiLeaf } from 'react-icons/bi'
import { FaHeart } from 'react-icons/fa'
import { GoPerson } from 'react-icons/go'

const Profile = () => {
    
  return (
    <div id='about' className='flex flex-col justify-start items-center w-full md:h-dvh bg-white px-5 pt-10 md:flex-row
    md:px-24 gap-14'>
      <div className='flex flex-col items-start gap-5 font-Quicksand w-full'>
        <h1  className='header-text !text-lg md:!text-4xl'>
            Our Sweet Adventure with Cass Hamada
        </h1>
        <p className='text-justify text-sm md:text-lg'>
            In the heart of San Fransokyo, a cozy little bakery called Dreamy Delights has been capturing hearts with its artisanal pastries and comforting breads. Founded by a group of passionate bakers, the bakery became a community favorite for its warm ambiance and delightful flavors.
        </p>
        <p className='text-justify text-sm md:text-lg'>
            Among the regulars was Cass Hamada, a bright and inventive young girl who loved to tinker with gadgets and experiment with flavors in her spare time. Every Saturday morning, Cass could be found at the counter, sketching ideas for new pastries while sipping on the bakery’s signature caramel latte.
        </p>

        <div className='flex items-start pt-12 gap-5 md:gap-[5rem]'>
            <div className='flex flex-col text-balance items-center w-full'>
                <FaHeart className='text-orange-300 md:size-[1.5rem]' />
                <span className='text-WithSymbols'>Made with Love</span>
                <p className='text-xs md:text-sm text-center'>Every recipe crafted with care <br />and passion</p>
            </div>

            <div className='flex flex-col text-balance items-center w-full'>
                <BiLeaf  className='text-orange-300 md:size-[1.5rem]' />
                <span className='text-WithSymbols'>Local Ingredients</span>
                <p className='text-xs text-center md:text-sm'>Sourced from trusted local farmers</p>
            </div>

            <div className='flex flex-col text-balance items-center w-full'>
                <GoPerson  className='text-orange-300 md:size-[1.5rem]' />
                <span className='text-WithSymbols'>Sole Proprietorship</span>
                <p className='text-xs text-center md:text-sm'>Made by Aunt Cass</p>
            </div>
        </div>

      </div>
        <div className='relative w-full h-[75vh]  md:mt-0'>
            <img 
            className='absolute w-[112px] h-[400px] md:w-[213px] md:h-[550px] object-cover opacity-75 hover:opacity-100 rounded-xl md:rounded-none md:rounded-l-xl
            top-0 left-0 md:top-0 md:left-0 z-20 transition-all duration-300 ease-in-out hover:-translate-y-7 hover:w-[300px] hover:rounded-xl'
            src="img/Profile-1.jpg" 
            alt="Profile-1" />

            <img 
            className='absolute w-[112px] h-[400px] md:w-[218px] md:h-[550px] object-cover opacity-75 hover:opacity-100 rounded-xl md:rounded-none
            top-5 left-[7rem] md:top-0 md:left-[13.3rem] z-10 transition-all duration-300 ease-in-out hover:-translate-y-7 hover:w-[250px] hover:rounded-xl hover:z-50 hover:left-[2rem]'
            src="img/Profile-2.jpg" 
            alt="Profile-1" />

            <img 
            className='absolute w-[112px] h-[400px] md:w-[214px] md:h-[550px] object-cover opacity-75 hover:opacity-100 rounded-xl md:rounded-none md:rounded-r-xl
            top-10 right-0 md:top-0 md:right-0 z-0 transition-all duration-300 ease-in-out hover:w-[300px] hover:-translate-y-7 hover:rounded-xl hover:z-50'
            src="img/Profile-4.jpg" 
            alt="Profile-1" />
        </div>
    </div>
  )
}

export default Profile
