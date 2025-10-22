import React, { useState } from 'react';
import { Signup } from '../API/Signup';
import './signup.css';
import { useNavigate } from 'react-router-dom';

const baseURL = import.meta.env.VITE_BASE_URL;

export const SignupPage = () => {
  const navigate = useNavigate(); // ✅ added this line

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const fetchData = async () => {
    const final = await Signup(baseURL, { email: email.trim(), password: password.trim(), name: name.trim() });
    console.log(final, "Signup response");

    // ✅ If signup success, redirect to login page
    if (final.status === 201 || final.status === 200) {
      alert("Signup successful! Please login.");
      navigate("/login");
    } else {
      alert("Signup failed, please try again.");
    }
  };

  const handleSubmitChange = (e) => {
    e.preventDefault();
    if (!email || !password || !name) return;
    fetchData();
  };

  return (
    <div className="signup_form">
      <form onSubmit={handleSubmitChange}>
        <div className="icon text-center">
          <i className="fa-solid fa-circle-user"></i>
        </div>

        <input type="text" name="name" placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} />
        <input type="text" name="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} />

        <div className="inputs flex w-full mx-10 ml-21">
          <div className="first w-[30px]">
            <input type="checkbox" name="Remember" id="remember" />
          </div>
          <label htmlFor="remember" className="w-[70%]">I Agree with the Terms and Condition</label>
        </div>

        <button type="submit" className="button1">Submit</button>
      </form>
    </div>
  );
};
