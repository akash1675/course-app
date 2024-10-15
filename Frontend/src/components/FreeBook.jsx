import list from "../assets/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";


const FreeBook = () => {
   const filterBook = list.filter((data) => data.category === "free");

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
               <h1 className="font-bold text-xl">Free Offered Courses</h1>
               <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores enim nulla sit debitis porro cumque recusandae fuga ea? Excepturi reiciendis animi.
               </p>
            </div>

            <div className="">
               <Slider {...settings}>
                  {filterBook.map((item) => (
                     <Cards item ={item} key={item.id}></Cards>
                  ))}
               </Slider>
            </div>
         </div>
      </>
   )
}

export default FreeBook