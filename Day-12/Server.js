const express = require('express')
require("dotenv").config();

const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const {Connections} = require("./config/dbs")
const {UserModule} = require("./model/usermodels")

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Rohan Gawade");
})

app.post("/signup", async (req, res) => {
    const {email , password, age , name} = req.body

    const userPresent = await UserModule.findOne({email})
    if(userPresent) res.send('Try login in , already exist')
        try{
            bcrypt.hash(password, 5, async function(err, difficultPass) {

                //store hash in your password DB

                const users = new UserModule({
                    email,
                    password: difficultPass,
                    age, 
                    name,
                });
                await users.save();
                res.send("Signup Succesfull...");
            })
        } catch(err) {
            console.log(err);
            res.send("something went wrong! please try again leater...");
        }
})

app.post("/login", async(req, res) => {
    const {email , password} = req.body
    try{
        const checkUserDetails = await UserModule.find({email});
        console.log(checkUserDetails , "checkUserDetails")

        if(checkUserDetails.length > 0) {
            const hashPassWord = checkUserDetails[0].password;
            console.log(hashPassWord , "hashPassWord")
        }
    }
})
