import gsap from 'gsap';
import { useWindowScroll } from 'react-use';
import React, { useEffect, useRef, useState } from 'react'

const navTtems = ["Home", "About", "Contact"];

const Nav = () => {

    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const navContainerRef = useRef(null);

    const { y: currentScrollY } = useWindowScroll();

    useEffect(() => {
            if(currentScrollY === 0){
                setIsNavVisible(true);
                navContainerRef.current.classList.remove('floating-nav');
            }else if(currentScrollY > lastScrollY) {
                setIsNavVisible(false);
                navContainerRef.current.classList.add('floating-nav');
            }else if(currentScrollY < lastScrollY) {
                setIsNavVisible(true);
                navContainerRef.current.classList.add('floating-nav');
            }
    
            setLastScrollY(currentScrollY);
    
        }, [currentScrollY, lastScrollY]);
    
        useEffect(() => {
            gsap.to(navContainerRef.current, {
                y: isNavVisible ? 0 : -100,
                opacity: isNavVisible ? 1 : 0,
                duration: 0.2,
            })
        }, [isNavVisible])

  return (
    <div ref={navContainerRef} className=' fixed z-50 border-none transition-all duration-700 w-full h-[45px] p-3 md:h-[45px]'>
      <header className='absolute w-full'>
        <nav className='flex items-center md:pl-10'>
            <div className='flex items-center md:w-full'>
                {/* <img src="/img/logo.png" alt="Logo" className='md:w-14 md:h-14 w-9 h-9 object-cover rounded-full' /> */}
                <span className='font-Quicksand font-bold md:pl-5'>AuntCass Bakery</span>
            </div>
            <div className='flex h-full md:w-full items-center justify-end md:pr-16'>
                    <div className='hidden md:block'>
                        {navTtems.map((item, index) => (
                            <a key={index} href={`#${item.toLocaleLowerCase()}`} className='font-Quicksand pr-5'>
                                {item}
                            </a>
                        ))}
                    </div>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav
