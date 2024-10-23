
import SignUp from "./components/SignUp"
import Contact from "./contact/Contact"
import Courses from "./courses/Courses"
import Home from "./home/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import { useAuth } from "./context/AuthProvider";
import { Toaster } from 'react-hot-toast';

function App() {
  const [authUser, setAuthuser] = useAuth();



  return (
    <>
      <div >
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route path="/course" element={authUser ? <Courses></Courses> : <Navigate to="/signup" />}>
          </Route>

          <Route path="/signup" element={<SignUp></SignUp>}></Route>

          <Route path="/contact" element={<Contact></Contact>}></Route>
          
        </Routes>
        <Toaster></Toaster>
      </div>

    </>
  )
}

export default App
