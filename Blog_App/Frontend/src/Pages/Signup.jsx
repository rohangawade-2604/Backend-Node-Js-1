import React, { useState } from 'react'

import {Signup} from '../API/Signup'

import './signup.css'

const baseURL = import.meta.env.VITE_BASE_URL

export const SignupPage = () => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);

  const fetchData = async() => {
    let final = await Signup(baseURL, { email:email.trim(), password:password.trim(), name:name.trim()})
    console.log(final, "final execution is situated")
  }
 
  const handleSubmitChange = (e) => {
    e.prevantDefault();

    if(email === "" && password === "" && name === "") 
      return;

    fetchData();
  }
  
  return (
    <>
    <div className="signup_form">
      <form action="" onSubmit={(e) => handleSubmitChange(e)}>
        
        <input type="text" name='name' placeholder='Enter your Name '  onChange={(e) => setEmail(e.target.value)} />

         <input type="text" name='email' placeholder='Enter your Email' onChange={(e) => setPassword(e.target.value)} />

           <input type="text" name='password' placeholder='Enter your Password' onChange={(e) => setName(e.target.value)} />

         <button type='button'>Submit</button>     
      </form>

      </div>
    </>
  )
}


