import React, { useState } from 'react'
import toast from 'react-hot-toast';

export default function Logout() {
   const [authUser, setAuthuser] = useState();
   const handleLogOut = () => {
      try{
         setAuthuser({
            ...authUser,
            user:null,
         });
         localStorage.removeItem("Users");
         toast.success("Logout successfully");
         setTimeout(()=>{
           window.location.reload(); 
        }, 2000)
      }
      catch(error){
         toast.error("Error :" + error.message)
         setTimeout(()=>{},2000);
      }
   }

  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
      onClick={handleLogOut}
      >
         Logout
      </button>
    </div>
  );
}

