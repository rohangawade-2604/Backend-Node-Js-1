const jwt = require("jsonwebtoken")

const Authenticate = (req, res, next) => {

    const token = req.headers?.authorization?.split(" ")[1];
    console.log(token, "this is the token")

    if(token){
        jwt.verify(token, "hush" ,(err, decode) => {
            if(decode){
                const userID = decode?.UserID;
                req.body.UserID = userId;
                next();
            }
            else{
                res.status(401).send("plz login don't have token...!!!", err)
            }
        })
    } else {
        res.send(401).send("first login first...!!!");
    }

};

module.exports = {Authenticate}