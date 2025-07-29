const express = require('express');

require('dotenv').config();

const jwt = require('jsonwebtoken');


const {Connections} = require('./config/db');
const {UserModule} = require('./model/user.model');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("welcome...")
});

app.post('/signup', async (req, res) => {
    const payload = req.body;
    try{
        const users = new UserModule(payload);
        await users.save();
        res.send("Signup Successfully")
    }
    catch(err){
        console.log(err);
        res.send("something went wrong..! plz try again later..")
    }
})

app.post('/login', async (req, res) => {
    const {email, password } = req.body;
    try{
        const checkUserDetails = await UserModule.find({email, password});
        if(checkUserDetails.length > 0 ){
            const token = jwt.sign({course: "nxm"}, "hust");
            res.send({msg: "Login Successfully", token: token})
        }
        else{
            res.send("login Denied")
        }
    }
    catch(err){
        console.log(err)
        res.send("Something went wrong..! plz try again later...!")
    }
});