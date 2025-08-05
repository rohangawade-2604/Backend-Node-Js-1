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

