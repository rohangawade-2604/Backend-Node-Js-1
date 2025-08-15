import React, { useEffect, useState } from "react";
import axios from 'axios';

export const Product = () => {

    const [data , setData]  = useState([]);

    const API = `http://localhost:9000/product`;

    const getApiData = async () => {
    try{
        let Card = await axios(API)
        let CardData = await Card.data;
        console.log('data' , data)
        setData(CardData)
    }
    catch(err){
        console.log(err)
    }
}

    useEffect(() => {
        getApiData();
    }, [])

    return(
        <>
        <h1>Product</h1>

        <div className="cards">
            {
               data.map((el, id) => (
                <div className="cards" key={id}>
                    <img src={el.image} alt="" />

                    <div>
                        <h3 className="">{el.title}</h3>
                        <p>{el.description}</p>
                        <p>{el.price}</p>
                    </div>
                </div>
               )) 
            }
        </div>
        </>
    )
}