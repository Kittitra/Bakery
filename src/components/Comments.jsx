import React from 'react'
import Comment from './Comment'

const Comments = () => {
  return (
    <div className='flex flex-col justify-center items-center 
    w-full h-full md:h-[80vh] bg-gray-100 gap-2 md:px-px pt-14 md:pt-20 pb-20 '>
      <h1 className='header-text md:!text-5xl text-orange-300'>What Our Customers Say</h1>
      <p className='font-Quicksand text-xs md:text-lg'>Don't just take our word for it - hear from our happy customers</p>

      <div className='flex flex-col md:justify-center md:flex-row w-full h-full pt-10 gap-10 px-2 md:px-10 md:pt-20 md:gap-16'>
        <Comment 
        comment="I've ordered wedding cakes and dessert tables from them multiple times. The quality is consistently exceptional, and they always deliver on time. My clients love them!"
        name="Emily Rodriguez"
        job="Event Planner"
        stars={5} />

        <Comment 
        comment="The best bakery in town! Their sourdough bread is absolutely divine, and the staff is always so friendly. I've been coming here for 5 years and they never disappoint."
        name="Sarah Johnson"
        job="Regular Customer"
        stars={5} />

        <Comment 
        comment="Sweet Dreams Bakery creates magic with flour and butter. Their croissants rival those I've had in Paris, and their custom cakes are works of art. Highly recommended!"
        name="Michael Chen"
        job="Food Blogger"
        stars={5} />
      </div>
    </div>
  )
}

export default Comments
