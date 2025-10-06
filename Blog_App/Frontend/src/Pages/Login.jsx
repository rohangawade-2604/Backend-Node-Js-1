import React from 'react'
import { useState } from 'react';

import { Login } from "../API/Login"

const baseURL = import.meta.env.BASE_URL;


export const LoginPage = () => {

  const { email, setEmail } = useState(null);
  const { password, setPassword } = useState(null);

  const fetchData = async () => {
    const final = await Login(baseURL, { email:email.trim(), password:password.trim()})
    console.log(final, "final answer is executed...")
  }

  const handleSubmitChange = (e) => {
    e.preventDefault();

    if(email === "" && password === "")

    fetchData()
  }

  return (
    <>
      <form action="" onSubmit={() => handleSubmitChange()}>

        email: <input type="text" name='email' placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)}/>
        
        password: <input type="text" name='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}/>

        <button type='button'>Submit</button>
      </form>
    </>
  )
}


