import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'

export const Navbar = () => {
  return (
    <>
        <div className="container flex justify-around gap-20 items-center border-2 ">

          <div className="logo">
            <img src={Logo} alt="" className='w-30 h-30'/>
          </div>

          <div className="navbars flex justify-around gap-20 text-[20px] font-bold">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
            <Link to="/product">Product</Link>
          </div>

          <div className="search-bar flex gap-5">
            <input type="text" placeholder='Search...' className='border-b-2'/>
            <button>Search</button>
          </div>
        </div>
    </>
  )
}


