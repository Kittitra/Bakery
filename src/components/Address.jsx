import React from 'react'
import AddressCard from './AddressCard'
import { IoLocationSharp } from 'react-icons/io5'
import { CiPhone } from 'react-icons/ci'
import { MdOutlineAccessTime, MdOutlineMail } from 'react-icons/md'
import Map from './Map'
import Footer from './Footer'

const Address = () => {
  return (
    <div className='flex flex-col bg-white md:px-28 py-20'>
      <div className='flex flex-col items-center gap-5'>
        <h1 className='header-text md:!text-4xl font-Baloo2'>
            Visit Us Today
        </h1>
        <p className='font-Quicksand text-xs md:text-lg text-center px-5 md:px-0'>
            Come experience the warmth and aroma of fresh-baked goodness
        </p>
      </div>

      <div className='flex flex-col md:flex-row justify-center px-5 md:px-px md:gap-12 pt-20'>
        <div className='flex flex-col w-full gap-10 '>
                <AddressCard 
                icon={<IoLocationSharp className='size-5 md:size-8 text-orange-300' />}
                header={"Location"}
                addrs="123 Main Street <br />Bakerville, CA 90210 <br />United States" 
                />

                <AddressCard 
                icon={<CiPhone className='size-5 md:size-8 text-orange-300' />}
                header={"Contact"}
                addrs="Phone: (555) 123-CAKE <br />
                Email: hello@sweetdreamsbakery.com" 
                />

                <AddressCard 
                icon={<MdOutlineAccessTime className='size-5 md:size-8 text-orange-300'/>}
                header={"Hours"}
                addrs="Monday - Friday | 
                6:00 AM - 7:00 PM <br />
                Saturday | 
                7:00 AM - 8:00 PM <br />
                Sunday | 
                8:00 AM - 6:00 PM "  
                />

                <div className='flex flex-col md:flex-row gap-3 md:gap-7'>
                    <button className='flex items-center btn hover-btn bg-orange-300 text-white gap-3'>
                        <CiPhone />
                        <span className='text-sm md:text-lg'>
                          Call to Order
                        </span>
                    </button>
                    <button className='flex items-center btn hover-btn bg-white text-black border gap-3'>
                        <MdOutlineMail />
                        <span className='text-sm md:text-lg'>
                          Send Message
                        </span>
                    </button>
                </div>
        </div>

        <div className='flex justify-center  w-full h-fit pt-10 md:pt-0 md:w-[2000px] md:h-[500px]'>
            <Map />
        </div>
      </div>
    </div>
  )
}

export default Address
