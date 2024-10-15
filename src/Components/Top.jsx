import React, {useState} from 'react'
import * as AiIcons from 'react-icons/ai'
import { HashLink as Link } from 'react-router-hash-link'



function Top() {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <div className='z-[999] bg-black flex justify-between items-center fixed top-0 h-10 right-0 left-0 px-4  md:fixed md:h-20 md:top-0 '>
      <div className=' text-white  md:text-lg  flex justify-between items-center  md:gap-[150px] md:py-7 lg:gap-[400px] xl:gap-[400px] xl:px-96'>
        <span className='font-bold' >Branesty.</span>
        <div className={`hidden md:flex`}>
            <ul className='md:flex md:gap-5 xl:gap-20 md:font-semibold '>
              <Link to='#home' smooth  exact 
              // scroll={el => scrollWidthOffset(el)}
              >
                <li className='cursor-pointer active:text-lightBlue'>Home</li>
              </Link>                          

              <Link to='#services' smooth  
              // scroll={el => scrollWidthOffset(el)}
              >
                <li className='cursor-pointer active:text-lightBlue'>Services</li>
              </Link>
                
              <Link to='#testimonials' smooth  
              // scroll={el => scrollWidthOffset(el)}
              >
                <li className='cursor-pointer active:text-lightBlue'>Testimonials</li>
              </Link>
                
              <Link to='#contact' smooth  
              // scroll={el => scrollWidthOffset(el)}
              >
                <li className='cursor-pointer active:text-lightBlue'>Get In Touch</li>
              </Link>  
              
            </ul>
        </div>

      </div>
      <div>
        <AiIcons.AiOutlineMenu size={20} className={` text-white ml-[200px]  md:hidden`} onClick={()=>setShowMenu(true)}/>
        <div className= {`${!showMenu && 'hidden animate-fade'}  fixed flex left-0 pl-10 text-white top-0 pb-96 h-full w-full bg-darkBlue border-r border-r-lightBlue sm:fixed sm:left-20 sm:text-white sm:top-0 pt-20 sm:h-full sm:w-[60%] sm:bg-darkBlue sm:border-r sm:border-r-lightBlue md:hidden`}>
              
              <ul className='justify-between intems-center flex flex-col text-[16px] font-semibold sm:gap-4 '>
               <Link to='#home' smooth>
                  <li className='cursor-pointer mb-4' onClick={()=>setShowMenu(!showMenu)}>Home</li>
                </Link> 
                <Link to='#services'>
                <li className='cursor-pointer mb-4' onClick={()=>setShowMenu(!showMenu)}>Services</li>
                </Link>
                <Link to='#testimonials' smooth>
                  <li className='cursor-pointer mb-4' onClick={()=>setShowMenu(!showMenu)}>Testimonials</li>
                </Link>
                <Link to='#contact' smooth>
                  <li className='cursor-pointer mb-4' onClick={()=>setShowMenu(!showMenu)}>Get In Touch</li>
                </Link>
            </ul>
            <AiIcons.AiOutlineClose className='text-white text-2xl ml-[120px] mb-10' onClick={()=>setShowMenu(!showMenu)}/>
        </div>
        
      </div>
    </div>
  )
}

export default Top