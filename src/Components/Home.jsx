import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'

function Home() {
  return (
    <div className='bg-black flex justify-between items-center fixed h-full right-0 left-0 px-4  md:fixed md:h-[700px] md:top-20'>
        <div className=' text-white  md:text-lg  md:gap-[150px] md:py-7 lg:gap-[400px] xl:gap-[400px] xl:px-96 md:pr-20'>
            <h1 className="font-sans font-extrabold text-[48px] md:pr-[600px] leading-[55px] md:mt-20"> 
                We provide creative design <span className='text-lime-400'> solutions</span> <br />for everyone.
            </h1>
            <p className="font-sans font-medium mt-5 md:pr-[550px]">
                We create tailored solutions that bring your vision to life. Whether you’re a startup or an established business, 
                we focus on user experience and fresh ideas to deliver designs that inspire and engage.
            </p>
            <Link to='#contact' smooth className='active:text-lightBlue' >
          <button className='ml-24 md:ml-0 text-white bg-lime-400 font-medium py-4 px-2 w-[200px] text-center rounded-md mt-5 hover:bg-lime-400 hover:text-darkBlue hover:animate-headShake flex gap-2'>Get In Touch</button>
        </Link>

        </div>
    </div>
  )
}

export default Home