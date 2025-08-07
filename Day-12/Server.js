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
            console.log(hashPassWord , "hashPassWord");

            bcrypt.compare(password, hashPassWord, function (err, result) {
                console.log(result, "result");

                if(result) {
                    const token = jwt.sign({course:"nxm"} , "hust");
                    res.send({msg: "login Successfully....", token: token})
                }
                else{
                    res.send(`login Unsuccessfully password ${err}`)
                } 
            })
            
        }
        else{
            res.send("login Unsuccessfully")
        }
    }
    catch(err) {
        console.log(err);
        res.send("something went wrong! please try again later...");
    }
});


app.get("/about" ,(req, res) => {
    res.send("This is the About page....");
})

app.get("/weather" , (req, res) => {
    // const token = req.query.token;

    const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, "hush" , (err , decoded) => {
        if(err){
            res.send("please login first")
        }
        else if (decoded) {
            console.log(decoded, "decoded")
            res.send("this is the weather app")
        }
        
    })
})