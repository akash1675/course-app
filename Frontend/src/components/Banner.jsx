import { useState } from "react"
import toast from 'react-hot-toast';


function Banner() {
  // it is use for email cleanup after submit

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send inputValue to backend or process it
    console.log(inputValue);
    // Clear the input field after submit
    setInputValue('');
    toast.success('Email has been submitted');
  };



  return (
    <>
      <div className="max-w-screen-2*1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 ">
        {/* left part*/}
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          {/* heading , para and email input*/}
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Achieve your career goals with {" "}
              <span className="text-amber-500">Learnify Plus!!</span>
            </h1>
            <p>Start, switch, or advance your career with more than 7,000 courses, Professional Certificates, and degrees from world-class universities and companies.</p>

          </div>

          <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2 mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Email" />

            </label>
            <button type="submit" className="btn mt-3 bg-slate-400 text-white">Submit</button>
          
          </form>

        </div>

        {/* right part */}
        <div className="order-1 w-full md:w-1/2">
          <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729351817/online_program_yxv0cc.webp" className="px-10 py-10 ml-10 mt-10" alt="" />
        </div>
      </div>
    </>
  )
}

export default Banner