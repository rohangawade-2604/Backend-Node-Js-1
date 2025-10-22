import React from 'react'
import { useState } from 'react';
import "./Login.css"

import { Link } from 'react-router-dom'

import { Login } from "../API/Login"

import { SignupPage } from './Signup'

const baseURL = import.meta.env.VITE_BASE_URL;

import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const fetchData = async () => {
    const final = await Login(baseURL, { email: email.trim(), password: password.trim() })
    console.log("🚀 ~ final:", final.status);
    console.log(final, "final answer is executed...");

    if (final.status !== 202) {
      navigate("/signup")
      return
    };

    localStorage.setItem("token is saved ", final.data.token)
    navigate("/blog-read")
  }


  const handleSubmitChange = (e) => {
    e.preventDefault();

    if (email === "" && password === "") return

      fetchData()
  }

  return (
    <>
      <div className="login_form ">

        <form onSubmit={() => handleSubmitChange(event)}>

          <div className="icon text-center">
            <i className="fa-solid fa-circle-user"></i>
          </div>

          <input type="text" name='email' placeholder='Enter your Email' onChange={e=> setEmail(e.target.value)} className='email w-60 border-2' />

          <input type="text" name='password' placeholder='Enter your password' onChange={e => setPassword(e.target.value)} className='password w-60 border-2' />

          <div className="content flex  mx-13 text-[13px]">
            <div className="inputs flex w-40 ">
              <input type="checkbox" name='Remember' id='remember' />
              <label htmlFor="" id='remember' className=' w-60'>Remember Me </label><br />
            </div>
            <h1 className='forget'>Forgot Password ?</h1>
          </div>

          <button type='submit' className='submit'>Submit</button>

          <p className='Signup'><Link to="/signup">Don't have Account ? Signup Now</Link></p>
        </form>
      </div>
    </>
  )
}


