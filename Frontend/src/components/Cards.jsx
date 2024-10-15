
// eslint-disable-next-line react/prop-types
const Cards = ({item}) => {
   console.log(item);
   return (
      <>
         <div className="mt-4 my-3 p-3">
            <div className="card w-92 bg-base-100 w-96 shadow-xl">
               <figure>
                  <img
                     // eslint-disable-next-line react/prop-types
                     src={item.image}
                     alt="Shoes" />
               </figure>
               <div className="card-body">
                  <h2 className="card-title">
                     {item.name}
                     <div className="badge badge-secondary">{item.category}</div>
                  </h2>
                  <p>{item.title}</p>
                  <div className="card-actions justify-between ">
                     <div className="badge badge-outline">${item.price}</div>
                     <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white  duration-200 ">Products</div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Cards