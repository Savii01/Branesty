import React,{useState, useRef} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'
import { HashLink as Link } from 'react-router-hash-link'
import Logo1 from '../Images/logo2.png'

function Footer() {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="bg-lilBlack text-white text-4xl px-10 md:px-40 py-20 w-screen">
      <div className="md:flex justify-between items-center">
        <div className="flex  flex-col">
        <Link to='#home' smooth>
          <img src={Logo1} alt="" className='w-24 md:w-40 py-2'/>
          </Link>
        </div>
        <div className={`text-sm md:flex`}>
            <ul className='grid grid-cols-3 mb-10 font-bold text-center mt-5 md:flex md:gap-10 md:font-semibold md:text-lg'>
              <Link to='#services' smooth>
                  <li className='cursor-pointer mb-4 md:hover:text-lemon' onClick={()=>setShowMenu(!showMenu)}>Services</li>
                </Link>
               
                <Link to='#testimonials' smooth>
                  <li className='cursor-pointer mb-4 md:hover:text-lemon' onClick={()=>setShowMenu(!showMenu)}>Testimonial</li>
                </Link>
                <Link to='#getInTouch' smooth>
                  <li className='cursor-pointer mb-4 md:hover:text-lemon' onClick={()=>setShowMenu(!showMenu)}>Get In Touch</li>
                </Link>
            </ul>
          </div>
          <div className='ml-12 md:ml-0 mb-10 grid grid-cols-4 gap-5 md:pr-10 lg:pr-20 '>
            <a target='_blank' rel='noreferrer' href='https://github.com/Savii01'>
              <FaIcons.FaBehance className='text-white hover:text-lemon cursor-pointer text-2xl '/>
            </a>
            <a target='_blank' rel='noreferrer' href='https://www.instagram.com/andrewsdesign_/'>
              <FaIcons.FaInstagram className='text-white hover:text-lemon  text-2xl cursor-pointer'/>
            </a>
            <a target='_blank' rel='noreferrer' href='https://api.whatsapp.com/send/?phone=2349049152073&text&type=phone_number&app_absent=0'>
              <FaIcons.FaWhatsapp className='text-white hover:text-lemon cursor-pointer text-2xl '/>
            </a>
            <a target='_blank' rel='noreferrer' href='https://web.facebook.com/anthony.saviour.942/'>
              <FaIcons.FaFacebook className='text-white hover:text-lemon cursor-pointer text-2xl '/>
            </a>
          </div>
        </div>
        <span className="text-sm text-grayBlue flex justify-center items-center gap-2"><AiIcons.AiOutlineCopyright className=''/>Branesty. All rights reserved</span>


      </div>
  )
}

export default Footer