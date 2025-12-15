import React from 'react'

const AddressCard = ({ icon, header, addrs }) => {
  return (
    <div className='flex px-5 py-8 border rounded-3xl w-full gap-3'>
      {icon}
      <div className='flex flex-col'>
        <h1 className='font-semibold font-Baloo2 md:text-2xl'> {header} </h1>
        <p className='font-Quicksand pt-2'>
            {addrs.split('<br />').map((line, index) => (
                <div key={index}
                className='flex flex-col'>
                    <span className='text-xs md:text-lg'>
                        {line}
                    </span>
                </div>
            ))}
        </p>
      </div>
    </div>
  )
}

export default AddressCard
