import React, { useEffect } from "react";

const getAPI = async (url) => {
    try{
        let res = await fetch(url)
        let data = await res.json()
        console.log('data' , data)
    }
    catch(err){
        console.log(err)
    }
}

export const Product = () => {
    // const api = ``;

    useEffect(() => {
        getAPI();
    },[]);

    return(
        <>
        <h1>Product</h1>
        </>
    )
}