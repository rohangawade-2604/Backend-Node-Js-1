/* eslint-disable react-hooks/exhaustive-deps */


import React, { useEffect, useState } from 'react'
import { Blog_Read } from '../API/Blog_Read'

import { useNavigate } from 'react-router-dom'
const baseURL = import.meta.env.VITE_BASE_URL;


export const Blog_ReadPage = () => {

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  
  const fetchData = async () => {
    const token = localStorage.getItem("token")
    console.log("🚀 ~ token:", token);
    const final = await Blog_Read(baseURL, token)
    console.log(final, "we got the data inside the console")
    
  
    

    if(final.status === 401){
      navigate('/login');
      return;
    }
    setData(final)
  }
  console.log("🚀 ~ data:", data);


  useEffect(() => {
    fetchData();

  }, [])



  return (
    <>
      <h1>Blog_UI</h1>
      {
        data && data.map((el, _id) => (
          <div key={ _id }>
           
            <h1>{el.title}</h1>
            
          </div>
        ))
      }
    </>
  )
}




// {
//   "name":"rohangaikwad123",
//   "email":"rohangaikwad123@gmail.com",
//   "password":"rohangaikwad123543"
// }

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2OGUzOGEyZTE3MzlkYjMyNjYxNWQ1NTgiLCJpYXQiOjE3NTk3NDMzMzR9.eirywFiUQJ11WtxnjZb1vEhHkHSm7dik5Yv8YgRhHVU

// {
//   "title":"Demon slayer",
//   "note":"Web anime infinity castle",
//   "category":["tanjiro", "inosuke", "zenitsu"]
// }