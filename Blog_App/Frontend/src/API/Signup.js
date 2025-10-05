import React from 'react'

export const Signup = async(base_url, data) => {
    console.log(data, "data is been return");

    try {
        let res = await fetch(`${base_url}/signup`, data)
        console.log(res, "response from signup api");
        return res;
    } catch (error) {
        console.log(error)
    }
}

 
