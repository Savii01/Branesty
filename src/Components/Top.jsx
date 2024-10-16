import React, {useState} from 'react'
import * as AiIcons from 'react-icons/ai'
import { HashLink as Link } from 'react-router-hash-link'

function Top() {
    const [showMenu, setShowMenu] = useState(false)
    return (
      <div className='z-[999] bg-black flex justify-center items-center w-screen fixed top-0 h-10 md:h-20'>
        <div className='text-white w-full max-w-[1200px] flex justify-between px-4 md:px-20 items-center'>
          {/* Logo Section */}
          <span className='font-bold text-lg md:text-xl'>Branesty.</span>

          {/* Desktop Menu */}
          <div className={`hidden md:flex`}>
            <ul className='flex gap-8 md:gap-10 lg:gap-16 font-semibold'>
              <Link to='#home' smooth>
                <li className='cursor-pointer active:text-lightBlue'>Home</li>
              </Link>
              <Link to='#services' smooth>
                <li className='cursor-pointer active:text-lightBlue'>Services</li>
              </Link>
              <Link to='#testimonials' smooth>
                <li className='cursor-pointer active:text-lightBlue'>Testimonials</li>
              </Link>
              <Link to='#contact' smooth>
                <li className='cursor-pointer active:text-lightBlue'>Get In Touch</li>
              </Link>
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <AiIcons.AiOutlineMenu size={20} className={`text-white md:hidden`} onClick={() => setShowMenu(true)} />
        </div>

        {/* Mobile Menu */}
        <div className={`${!showMenu && 'hidden'} fixed flex left-0 pl-10 text-white top-0 h-full w-full bg-darkBlue border-r border-r-lightBlue md:hidden`}>
          <ul className='flex flex-col gap-4 pt-20'>
            <Link to='#home' smooth>
              <li className='cursor-pointer' onClick={() => setShowMenu(false)}>Home</li>
            </Link>
            <Link to='#services' smooth>
              <li className='cursor-pointer' onClick={() => setShowMenu(false)}>Services</li>
            </Link>
            <Link to='#testimonials' smooth>
              <li className='cursor-pointer' onClick={() => setShowMenu(false)}>Testimonials</li>
            </Link>
            <Link to='#contact' smooth>
              <li className='cursor-pointer' onClick={() => setShowMenu(false)}>Get In Touch</li>
            </Link>
          </ul>
          <AiIcons.AiOutlineClose size={24} className='absolute top-5 right-5' onClick={() => setShowMenu(false)} />
        </div>
      </div>
    )
}

export default Top
