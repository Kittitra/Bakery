import React, { useRef } from 'react'
import { CiCoffeeCup } from 'react-icons/ci'
import { IoMdTime } from 'react-icons/io'
import { LuChefHat } from 'react-icons/lu'
import gsap from 'gsap'

const Hero = () => {
  const frameRefs = useRef([]);

  frameRefs.current = [];

  const addToRefs = (el) => {
    if (el && !frameRefs.current.includes(el)) {
      frameRefs.current.push(el);
    }
  };

  const handleMouseLeave = () => {
    frameRefs.current.forEach((element) => {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    frameRefs.current.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      gsap.to(element, {
        duration: 0.3,
        rotateX,
        rotateY,
        transformPerspective: 300,
        ease: "power1.inOut",
      });
    });
  }

  return (
    <div id='home' className='flex justify-center flex-center w-dvw min-h-screen flex-col md:flex-row
     px-5 pt-16 md:pt-40 md:px-36' >
      <div className='flex flex-col justify-start w-full pt-14 gap-2'>
        <h1 className='header-text text-black'>
          Freshly Baked
        </h1>
        <h1 className='header-text text-orange-300'>
          Every Morning
        </h1>
        <p className='font-Quicksand mt-3 text-md md:text-lg '>
          Experience the warmth and comfort of artisanal baking. 
          From our oven to your table, we create memorable moments 
          with every bite.
        </p>
        <div className='flex gap-3 mt-5 flex-col w-full md:flex-row md:gap-5'>
          <button className='btn hover-btn bg-orange-300 text-white w-full md:w-fit'>
            View Our Menu
          </button>
          <button className='btn hover-btn bg-green-300 text-white w-full md:w-fit'>
            Visit Our Store
          </button>
        </div>

        <div className='flex justify-center items-center w-full gap-10 pt-10
        md:gap-24 md:pt-[4rem]'>
          <div className='flex flex-col justify-center items-center gap-2 '>
            <LuChefHat className='text-orange-300 size-[20px] md:size-[2rem]' />
            <span className='font-Quicksand text-sm'>Expert Bakers</span>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <IoMdTime  className='text-orange-300 size-[20px] md:size-[2rem]' />
            <span className='font-Quicksand text-sm'>Fresh Daily</span>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <CiCoffeeCup  className='text-orange-300 size-[20px] md:size-[2rem]' />
            <span className='font-Quicksand text-sm'>and Coffee</span>
          </div>
        </div>
      </div>

      <div ref={frameElement}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseLeave}
        onMouseEnter={handleMouseLeave}
        onMouseMove={handleMouseMove}
      className='relative w-full h-[69vh] mt-0 md:mt-10'>
        <img 
        className='absolute right-10 bottom-[5rem] md:top-[-3rem] md:right-[7rem]
        object-cover w-[200px] md:w-[350px] md:h-fit rounded-3xl'
        src="img/Hero-1.jpg" 
        alt="hero-1" />

        <img 
        ref={addToRefs}
        
        className='absolute right-5 bottom-10 md:left-14 md:bottom-auto md:top-10 md:right-auto
        object-cover w-[80px] md:w-[200px] md:h-[250px] rounded-3xl'
        src="img/Hero-2.jpg" 
        alt="hero-2" />

        <img 
        ref={addToRefs}

        className='absolute left-5 top-24 md:right-1 md:bottom-12 md:top-auto md:left-auto  
        object-cover w-[100px] md:w-[200px] md:h-[250px] rounded-3xl'
        src="img/Hero-3.jpg" 
        alt="hero-3" />
      </div>
    </div>
  )
}

export default Hero
