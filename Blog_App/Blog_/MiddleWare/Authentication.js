const jwt = require('jsonwebtoken');
require('dotenv').config();

const Authentication = (req, res, next) => {
console.log(req.headers);
    const VerifyToken = req.headers?.authorization?.split(" ")[1];
    console.log(VerifyToken);
    if(VerifyToken) {
        jwt.verify(VerifyToken, process.env.SECRET_KEY, (err, data) => {
            console.log(data)
            if(data){
                const userID = data?.userID;
                req.body.userID = userID;
                next();
             }
             else{
                return res.send("Bhaag bsdk..!!!", err);
             }
        });
        
    }
    else{
        return res.send("you dont have token , ja jaun login kr lavdya");    
    }
}


module.exports = { Authentication }