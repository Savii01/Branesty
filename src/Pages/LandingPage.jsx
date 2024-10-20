import React from 'react'
import Top from '../Components/Top'
import {Router,Routes,Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from '../Components/Home'
import Services from '../Components/Services'
import Testimonials from '../Components/Testimonials'

function LandingPage() {
  return (
    <BrowserRouter>
    <div className="font-sans">
    <div className='bg-white flex flex-col justify-center items-center '>
          <Top className=""/>
          <Home className='mb-20'/>
          <Services className='mb-20'/>
          <Testimonials className='mb-20'/>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default LandingPage