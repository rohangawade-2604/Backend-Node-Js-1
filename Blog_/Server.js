//Server

//import from node_Modules
const express = require('express');
const bycrpt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();


//import form the personal files

const { Connection } = require('./config/db');
const { UserModule } = require('./Model/signup.model');

const app = express();

app.use(express.json());   //to parse the json data into readable format

app.get('/', (req, res) => {
    res.send("Welcome to the home page");
});

app.post('/signup', async(req, res) => {
    const {email, password, name} = req.body;

    const UserPresent = await UserModule.findOne({ email });
    console.log(UserPresent);

    if(UserPresent) {
        res.send("User already present, please login");
        // return;
    }
    
    // bcyrpting the password before storing it in the database

    try {
        bycrpt.hash(password, 5, async(error, diff_pass) => {
            console.log(diff_pass);
            
            const user = new UserModule({
                email,
                password: diff_pass,
                name
                
            })
            await user.save();
            res.send("Signup successfully")
            // return res.status(201).json({success: true, message: "Signup Succesffuly"})
        })
    } catch (error) {
        console.log(error,"error in signup")
        res.send("Something went wrong, please try again later");
    }

})

app.listen(process.env.PORT, async() => {
    try{
        await Connection;
        console.log("Connected to the database");
    }
    catch(err){
        console.log("connection db failed", err)
    }

    console.log(`your port is running at ${process.env.PORT}`);
})


