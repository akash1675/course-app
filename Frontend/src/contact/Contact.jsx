import React from 'react'
import Navbarr from '../components/Navbarr'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'

function Contact() {
  return (
    <>
    <Navbarr></Navbarr>
    <div className='min-h-screen'>
      <ContactUs></ContactUs>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Contact