import React from 'react'
import Top from '../Components/Top'
import {Router,Routes,Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from '../Components/Home'

function LandingPage() {
  return (
    <BrowserRouter>
    <div className="font-sans">
    <div className='bg-white flex justify-center items-center my-[150px] px-10 sm:px-20 md:px-10 lg:px-20 xl:px-40 '>
          <Top className=""/>
          <Home className='mb-20'/>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default LandingPage