import React, { useEffect, useState } from 'react'
import {Blog_Read} from "../src/API/Blog_Read"

const baseURL = import.meta.env.BASE_URL;

export const Blog_ReadPage = () => {

    const [data, setData] = useState();

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
                <h1></h1>
            </div>
        ))
      }
    </>
  )
}

 
