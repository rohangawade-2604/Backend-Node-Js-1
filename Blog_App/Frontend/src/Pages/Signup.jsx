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
      <form action="" onSubmit={() => handleSubmitChange()}>

        <div className="icon text-center ">
            <i class="fa-solid fa-circle-user"></i>
          </div>
        
        <input type="text" name='name' placeholder='Enter your Name '  onChange={(e) => setEmail(e.target.value)} />

        <input type="text" name='email' placeholder='Enter your Email' onChange={(e) => setPassword(e.target.value)} />

        <input type="text" name='password' placeholder='Enter your Password' onChange={(e) => setName(e.target.value)} />

        <div className="inputs  flex justify- w-[100%] mx-10 ml-21">
          <div className="first w-[30px]">

              <input type="checkbox" name='Remember' id='remember' className=' '   />
          </div>
            <label htmlFor="" id='remember' className=' w-[70%]  '>I Agree with the Terms and Condition  </label><br />
            </div>

         <button type='button' className='button1'
         >Submit</button>     
      </form>

      </div>
    </>
  )
}


