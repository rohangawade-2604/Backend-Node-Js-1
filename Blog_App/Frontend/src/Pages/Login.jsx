import React from 'react'
import { useState } from 'react';
import "./Login.css"

import { Login } from "../API/Login"

const baseURL = import.meta.env.VITE_BASE_URL;


export const LoginPage = () => {

  const { email, setEmail } = useState(null);
  const { password, setPassword } = useState(null);

  const fetchData = async () => {
    const final = await Login(baseURL, { email: email.trim(), password: password.trim() })
    console.log(final, "final answer is executed...")
  }

  const handleSubmitChange = (e) => {
    e.preventDefault();

    if (email === "" && password === "")

      fetchData()
  }

  return (
    <>
      <div className="login_form ">

        <form action="" onSubmit={() => handleSubmitChange()} className='border-2 '>

          <h1>Login </h1>

          <input type="text" name='email' placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} className='email w-60 border-2' />

          <input type="text" name='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} className='password w-60 border-2' />

          <button type='button' className='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}


