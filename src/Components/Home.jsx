import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function Home() {
  return (
    <div className='bg-black flex justify-center items-center w-screen top-0 '>
      <div className='text-white w-full  max-w-[1200px] text-center md:text-left px-4 md:px-20 pt-20 md:pt-28'>
        <h1 className="font-sans font-extrabold text-[32px] md:text-[36px] lg:text-[48px] leading-[40px] md:leading-[55px]">
          We provide creative <br className='hidden md:block' />design <span className='text-lime-400'>solutions</span> <br className='hidden md:block' />
          for everyone.
        </h1>
        <p className="font-sans font-medium mt-5 md:mt-7 max-w-[600px]">
          We create tailored solutions that bring your vision to life. Whether you’re a startup or an established business, 
          we focus on user experience and fresh ideas to deliver designs that inspire and engage.
        </p>
        <Link to='#contact' smooth>
          <button className='mt-8 text-white bg-lime-400 font-medium py-4 px-8 rounded-md hover:bg-lime-500 transition-all'>
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
