import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { Home } from "../Components_pages/Home"
import { Categories } from "../Components_pages/Categories"
import { About } from "../Components_pages/About"
import { Blog } from "../Components_pages/Blog"
import { Contact } from "../Components_pages/Contact"
import { LoginPage } from "../Pages/Login"
import { SignupPage } from "../Pages/Signup"
import { Blog_ReadPage } from "../Component/Blog_Read"

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* connected to the login page for user should go throught the signup page */}
        <Route path='/signup' element={<SignupPage />}></Route>


        <Route path='/' element={<Home />}></Route>
        <Route path='/categories' element={<Categories />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blogs' element={<Blog_ReadPage />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/blog-read' element={<Blog_ReadPage />}></Route>
       


      </Routes>
    </>
  )
}


