import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';


function SignUp() {
   const location = useLocation();
   const navigate = useNavigate();
   const from = location.state?.from?.pathname || "/";
   const { handleSubmit, register, formState: { errors } } = useForm();
   const onSubmit = (data)=>{
      const userInfo = {
            fullname:data.fullname,
            email:data.email,
            password:data.password  
      }
      axios.post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
         // console.log(res.data);
         if(res.data){
            // alert("signup successfully");
            toast.success('signup successfully');
            navigate(from,{replace:"true"});
             window.location.reload();
         }
         localStorage.setItem("Users", JSON.stringify(res.data.user));
        
      })
      .catch((err)=> {
         if(err.response){
            console.log(err);
            // alert("Error: " + err.response.data.message);
            toast.success("Error: " + err.response.data.message);
         }
      })
   };
   return (
      <div className='flex h-screen items-center justify-center  '>
         <div className='w-[600px] '>
            <div className="modal-box">
               <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                  <h3 className="font-bold text-lg">Signup</h3>
                  {/* Name */}
                  <div className='mt-4 space-y-2'>
                     <span>Name</span>
                     <br />
                     <input type="text" placeholder='Enter Your fullname'
                        className='w-80 px-3 py-1 border rounded-md outline-none'
                        {...register("fullname", {
                           required: true
                        })} />
                     <br />
                     {errors.fullname && (<span className='text-sm text-red-500'>This field is is required</span>)}
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
                  <div className='mt-4 space-y-2'>
                     <span>Password</span>
                     <br />
                     <input type="text" placeholder='Enter Your Password'
                        className='w-80 px-3 py-1 border rounded-md outline-none'
                        {...register("password", { required: true })}
                     />
                     <br />
                     {errors.password && (<span className='text-sm text-red-500'>This field is is required</span>)}
                  </div>
                  {/* Button */}
                  <div className='flex justify-between mt-8 '>
                     <button className='bg-slate-500 text-white rounded-md px-3 py-2  hover:bg-amber-700 duration-200'>Signup</button>
                     <p className='text-xl'>Have account? <button onClick={() => document.getElementById("my_modal_3").showModal()} className='underline text-blue-500 cursor-pointer'>Login</button>
                        <Login></Login>
                     </p>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default SignUp