import React, { useState } from 'react';
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { Login } from "../API/Login";

const baseURL = import.meta.env.VITE_BASE_URL;

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchData = async () => {
    const final = await Login(baseURL, { email: email.trim(), password: password.trim() });
    console.log("🚀 ~ final:", final.status);
    console.log(final, "final answer is executed...");

    // ✅ check correct status
    if (final.status !== 200) {
       navigate("/login");
      return;
    }

    // ✅ save token
    const token = final.data?.token; // safe optional chaining
    if (token) {
      navigate("/blog-read");
    }

    localStorage.setItem("token", token);
    console.log("🚀 token saved:", token);

    //   if (final.status !== 202) {
    //     navigate("/login");
    //     return;
    //   } else {
    //     alert("Login Successful!");
    //   }

    //   localStorage.setItem("token", final.data.token);
    //   console.log("🚀 ~ final.data.token:", final.data.token);
    //   setTimeout(()=>{
    //     navigate("/blog-read");
    //   },1000)
    };

    const handleSubmitChange = (e) => {
      e.preventDefault();
      if (!email || !password) return;
      fetchData();
    };

    return (
      <div className="login_form">
        <form onSubmit={handleSubmitChange}>
          <div className="icon text-center">
            <i className="fa-solid fa-circle-user"></i>
          </div>

          <input type="text" name='email' placeholder='Enter your Email' onChange={e => setEmail(e.target.value)} className='email w-60 border-2' />
          <input type="password" name='password' placeholder='Enter your password' onChange={e => setPassword(e.target.value)} className='password w-60 border-2' />

          <div className="content flex  mx-13 text-[13px]">
            <div className="inputs flex w-40 ">
              <input type="checkbox" name='Remember' id='remember' />
              <label htmlFor="remember" className='w-60'>Remember Me</label>
            </div>
            <h1 className='forget'>Forgot Password ?</h1>
          </div>

          <button type='submit' className='submit'>Submit</button>
          <p className='Signup'><Link to="/signup">Don't have Account ? Signup Now</Link></p>
        </form>
      </div>
    );
  };
