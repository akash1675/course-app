import React from 'react'
import Navbarr from '../components/Navbarr'
import Course from '../components/Course'
import Footer from '../components/Footer'


function Courses() {
  return (
    <>
    <Navbarr></Navbarr>
    <div className='min-h-screen'>
       <Course></Course>
    </div>
   
    <Footer></Footer>
    </>
  )
}

export default Courses