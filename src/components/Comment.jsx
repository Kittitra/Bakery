import React from 'react'
import { CiStar, CiUser } from 'react-icons/ci'
import { FaQuoteRight, FaStar } from 'react-icons/fa'

const Comment = ({ comment, name, job, stars }) => {
  return (
    <div className='flex flex-col justify-start w-fit gap-5 
    rounded-2xl h-fit border border-gray-300 p-5'>
        <FaQuoteRight className='text-orange-300 text-xl' />
        <p className='font-Quicksand text-xs'><i>"{comment}"</i></p>

        <div className="flex">
            {[...Array(stars)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500 text-sm" />
            ))}
        </div>

        <div className='flex justify-start items-start gap-1'>
            <CiUser className='text-xl' />
            <div className='flex flex-col font-Quicksand text-sm'>
                <span>{name}</span>
                <span>{job}</span>
            </div>
        </div>

    </div>
  )
}

export default Comment
