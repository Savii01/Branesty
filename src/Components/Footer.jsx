import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { HashLink as Link } from 'react-router-hash-link'
import Logo1 from '../Images/logo2.png'

function Footer() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="bg-lilBlack text-white text-4xl flex flex-col justify-center items-center py-20 w-screen">
      <div className="w-full max-w-[1200px] md:flex justify-between px-4 md:px-20 items-center">
        <div className="flex ml-5 md:ml-0 flex-col">
          <Link to='#home' smooth>
            <img src={Logo1} alt="Logo" className='w-24 md:w-40 py-2'/>
          </Link>
          <div className="border-b-2 border-b-slate-400/25 md:hidden mt-5"></div>
        </div>

        <div className="text-sm md:flex">
          <ul className='grid grid-cols-3 mb-5 ml-5 md:ml-0 font-bold text-left md:text-center mt-5 md:flex md:gap-x-5 md:gap-10 md:font-semibold md:text-lg'>
            <li>
              <Link to='#services' smooth className='cursor-pointer mb-4 md:hover:text-lemon' onClick={() => setShowMenu(!showMenu)}>Services</Link>
            </li>
            <li>
              <Link to='#testimonials' smooth className='cursor-pointer mb-4 md:hover:text-lemon' onClick={() => setShowMenu(!showMenu)}>Testimonial</Link>
            </li>
            <li>
              <Link to='#getInTouch' smooth className='cursor-pointer mb-4 md:hover:text-lemon' onClick={() => setShowMenu(!showMenu)}>Get In Touch</Link>
            </li>
          </ul>
          <div className="ml-5 -mt-2 border-b-2 border-b-slate-400/25 md:hidden"></div>
        </div>

        <div className="ml-10 md:ml-0 mb-5 grid grid-cols-4 mt-5 gap-5 md:mt-0">
          <a target='_blank' rel='noreferrer' href='https://www.behance.net/'>
            <FaIcons.FaBehance className='text-white hover:text-lemon cursor-pointer text-2xl'/>
          </a>
          <a target='_blank' rel='noreferrer' href='https://www.instagram.com/officialbranesty/?igsh=MTFyeDMzMzNnMHVrcA%3D%3D'>
            <FaIcons.FaInstagram className='text-white hover:text-lemon text-2xl cursor-pointer'/>
          </a>
          <a target='_blank' rel='noreferrer' href='https://api.whatsapp.com/send/?phone=14782875929&text&type=phone_number&app_absent=0'>
            <FaIcons.FaWhatsapp className='text-white hover:text-lemon cursor-pointer text-2xl'/>
          </a>
          <a target='_blank' rel='noreferrer' href='https://www.facebook.com/branesty.studio'>
            <FaIcons.FaFacebook className='text-white hover:text-lemon cursor-pointer text-2xl'/>
          </a>
        </div>

        <div className="ml-5 border-b-2 border-b-slate-400/25 mt-5 md:hidden"></div>
      </div>

      <span className="text-sm text-grayBlue mt-5 flex justify-center items-center gap-2">
        <AiIcons.AiOutlineCopyright className='' />Branesty. All rights reserved 2024
      </span>
    </div>
  )
}

export default Footer
