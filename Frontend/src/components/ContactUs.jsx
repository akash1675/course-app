import React from 'react'
import { useForm } from "react-hook-form";

function ContactUs() {
   const { handleSubmit, register, formState: { errors } } = useForm();
   const onSubmit = values => console.log(values);
   return (
      <>

         <div >
            <div className='mt-28 items-center justify-center text-center'>
               <h1 className='text-2xl md:text-4xl'>Contact <spam className="text-amber-800" >us! :)</spam></h1>
               <div className=' px-0 py-5 mt-10'>
                  <form onSubmit={handleSubmit(onSubmit)}  >

                     {/* Name */}
                     <div className='mt-4 space-y-2'>
                        <span>Name</span>
                        <br />
                        <input type="text" placeholder='Enter Your Name'
                           className='w-80 px-3 py-1 border rounded-md outline-none'
                           {...register("name", {
                              required: true
                           })} />
                        <br />
                        {errors.name && (<span className='text-sm text-red-500'>This field is is required</span>)}
                     </div>
                     {/* email */}
                     <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input type="email" placeholder='Enter Your Email'
                           className='w-80 px-3 py-1 border rounded-md outline-none'
                           {...register("email", {
                              required: true
                           })}
                        />
                        <br />
                        {errors.email && (<span className='text-sm text-red-500'>This field is is required</span>)}
                     </div>
                     {/* password */}
                     <div className='mt-4 space-y-2 '>
                        <span >Message</span>
                        <br />
                        <input type="text" placeholder='Enter your message'
                           className='w-80 h-20  px-3  border rounded-md outline-none text-center'
                        />
                     </div>

                     {/* Button */}
                     <div className='flex justify-around mt-4 '>
                        <button className='bg-slate-500 text-white rounded-md px-3 py-1 hover:bg-amber-700 duration-200'>Submit</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>

      </>
   )
}

export default ContactUs