
import SignUp from "./components/SignUp"
import Courses from "./courses/Courses"
import Home from "./home/Home"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <div >
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/course" element={<Courses></Courses>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>
      </div>

    </>
  )
}

export default App
