import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import HeroBg from '../Images/herobg.png'

function Home() {
  return (
    <div className='bg-cover bg-right flex justify-center items-center h-[667px] lg:h-[600px] xl:h-[670px] sm:relative w-screen top-0 py-10'  style={{backgroundImage: `url(${HeroBg})` }}>
      {/* Overlay for mobile only */}
      <div className="absolute inset-0 bg-black opacity-70 block xl:hidden"></div>
      
      <div className='relative z-10 text-white w-full max-w-[1200px] text-center md:text-left px-4 md:px-20 pt-20 md:pt-20'>
        <h1 className="font-sans font-extrabold text-[32px] md:text-[36px] lg:text-[50px] leading-[40px] md:leading-[66px]">
          We provide creative <br className='hidden md:block' />design <span className='text-lemon'>solutions</span> <br className='hidden md:block' />
          for everyone.
        </h1>
        <p className="font-sans font-medium mt-5 lg:text-[20px] md:mt-7 max-w-[650px]">
          We create tailored solutions that bring your vision to life. Whether you’re a startup or an established business, 
          we focus on user experience and fresh ideas to deliver designs that inspire and engage.
        </p>
        <Link to='#contact' smooth>
          <button className='mt-8 text-black text-[16px] bg-lemon font-bold py-4 px-8 rounded-md hover:bg-lemon transition-all'>
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
