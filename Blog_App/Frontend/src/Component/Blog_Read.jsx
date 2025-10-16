
import React, { useEffect, useState } from 'react'
import { Blog_Read } from '../API/Blog_Read'

const baseURL = import.meta.env.VITE_BASE_URL;

export const Blog_ReadPage = () => {

    const [data, setData] = useState([]);

    const token = localStorage.getItem("token")

    const fetchData = async() => {
        const final = await Blog_Read(baseURL, token)
        console.log(final, "we got the data inside the console")
        setData(final)
    }

    useEffect(() => {
        fetchData();
    }, [])
 
    

  return (
    <>
      <h1>Blog_UI</h1>
      {
        data?.map((el,id) => (
            <div key={id}>
                <h1>{el.id}</h1>
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