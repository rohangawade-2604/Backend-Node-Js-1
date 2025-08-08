const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const {Connections} = require('./config/db')
const {UserModule} = require('./model/usermodel')
const {notesModule} = require('./model/note.model')