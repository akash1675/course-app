import React from 'react'
import list from "../assets/list.json"
import Cards from "./Cards"
import { Link } from "react-router-dom"

function Course() {
  return (
    <>
      <div className='max-w-screen-2*1 container mx-auto md:px-20 px-4 '>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you <spam className="text-pink-500" >Here! :)</spam></h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rerum nihil quas suscipit cum quibusdam obcaecati autem beatae aliquam blanditiis quidem officia dolorum debitis ducimus porro hic inventore, ut minus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto repellendus ad, fuga laudantium deleniti facere consectetur dolor. Illum facilis omnis voluptates distinctio iste id officia ullam nisi vero. Tempore, mollitia.</p>
          <Link to="/" >
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 '>Back</button>
          </Link>

        </div>
        <div className='mt-12  grid grid-cols-1 md:grid-cols-3  '>
          {
            list.map((item) => (
              <Cards item={item} key={item.id}></Cards>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course