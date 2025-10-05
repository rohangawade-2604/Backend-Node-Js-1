import React from 'react'

export const Login = async(base_url, data) => {
    console.log(data, "data is been return");

    try {
        let res = await fetch(`${base_url}/login`, data)
        console.log(res, "response from login api");
        return res;
    } catch (error) {
        console.log(error)
    }
};

