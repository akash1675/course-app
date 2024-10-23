import React, { useEffect, useState } from 'react'
// import list from "../assets/list.json"
import axios from "axios";
import Cards from "./Cards"
import { Link } from "react-router-dom"

function Course() {
  const [book, setBook]=useState([]);
  
  useEffect(() => {
    const getBook = async ()=> {
      try{
      const response =  await axios.get("http://localhost:4001/book")
      // console.log(response.data);
      setBook(response.data);
      }
      catch(error){
        console.log(error);
      }
    }
    getBook();

  },[])


  return (
    <>
      <div className='max-w-screen-2*1 container mx-auto md:px-20 px-4 '>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className="text-amber-500" >Here! :)</span></h1>
          <p className='mt-12'>
          Our Interactive LIVE and Self-Paced Courses are designed to provide a unique blend of personalized learning and flexibility. Taught by industry-leading experts, these courses emphasize individual attention, fostering an environment where students are encouraged to think critically and push the boundaries of conventional thought. We focus on promoting clarity in concepts, nurturing creativity, and inspiring innovative ideas. Whether through real-time interaction or self-paced study, our courses aim to build a deep understanding of subjects while empowering learners to explore new approaches and solutions, driving their professional and personal growth.</p>
          <Link to="/" >
            <button className='mt-6 bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-amber-700 duration-300 '>Back</button>
          </Link>

        </div>
        <div className='mt-12  grid grid-cols-1 md:grid-cols-3  '>
          {
            book.map((item) => (
              <Cards item={item} key={item.id}></Cards>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course