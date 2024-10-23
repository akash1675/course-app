// import list from "../assets/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { useState,useEffect } from "react";

const FreeBook = () => {

   const [book, setBook] = useState([]);

   useEffect(() => {
      const getBook = async () => {
         try {
            const response = await axios.get("http://localhost:4001/book")
            // console.log(response.data);
            setBook(response.data.filter((data) => data.category === "paid"));
         }
         catch (error) {
            console.log(error);
         }
      }
      getBook();

   }, [])



   var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };



   return (
      <>
         <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div>
               <h1 className="font-bold text-xl">Course Catalog</h1>
               <p>
               Experience Interactive LIVE and Self-Paced Courses, guided by industry-leading experts, with personalized attention to inspire out-of-the-box thinking, foster conceptual clarity, and spark creativity and innovation.
               </p>
            </div>

            <div className="">
               <Slider {...settings}>
                  {book.map((item) => (
                     <Cards item={item} key={item.id}></Cards>
                  ))}
               </Slider>
            </div>
         </div>
      </>
   )
}

export default FreeBook