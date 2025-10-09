const jwt = require('jsonwebtoken')
require('dotenv').config;

const Authenticate = (req, res, next) => {
console.log("🚀 ~ req:", req.headers);

const VerifyToken = req.headers?.authorization?.split(" ")[1];
console.log("🚀 ~ VerifyToken: you got", VerifyToken);

if(VerifyToken){
    jwt.verify(VerifyToken, process.env.SECRET_KEY, (err, data) => {
        console.log("🚀 ~ data is been send", data);
        
    })
}


    

}   

module.exports = {Authenticate}