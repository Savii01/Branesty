import React from 'react'
import Top from '../Components/Top'
import {Router,Routes,Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from '../Components/Home'
import Services from '../Components/Services'
import Testimonials from '../Components/Testimonials'
import GetInTouch from '../Components/GetInTouch'
import Footer from '../Components/Footer'

function LandingPage() {
  return (
    <BrowserRouter>
    <div className="font-sans">
    <div className='bg-white flex flex-col justify-center items-center '>
          <Top className=""/>
          <Home className='mb-48'/>
          <Services className='mb-48'/>
          <Testimonials className=''/>
          <GetInTouch className="mb-20"/>
          <Footer/>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default LandingPage