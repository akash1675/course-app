
import React from 'react'
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import FreeBook from "../components/FreeBook"
import Navbarr from "../components/Navbarr"

function Home() {
   return (
      <>
         <Navbarr></Navbarr>
         <Banner></Banner>
         <FreeBook></FreeBook>
         <Footer></Footer>

      </>
   )
}

export default Home