import './App.css'

// import {Blog_ReadPage} from "./Component/Blog_Read"

import { Navbar } from "./NavbarPages/Navbar"
import { AllRoutes } from './Routes/AllRoutes'

function App() {


  return (
    <>
      {/* <SignupPage />
      <LoginPage /> */}
      <Navbar />      
      <AllRoutes />
      {/* <Blog_ReadPage /> */}

    </>
  )
}

export default App
