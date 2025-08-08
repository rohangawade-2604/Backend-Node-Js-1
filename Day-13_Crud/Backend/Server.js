const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const {Connections} = require('./config/db')
const {UserModule} = require('./model/usermodel')
const {notesModule} = require('./Routes/Note.model')
const {Authenticate}= require('./middleware/Authentication')

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("welcome...!!!")
})

app.post('/signup', async (req, res) => {
  const { email, password, username } = req.body;
  // const { email, password, age, name } = req.body;
  // console.log(payload);

  const userPresent = await UserModule.findOne({ email });
  if (userPresent) res.send(`Try loggin in, already exist`);
  try {
    bcrypt.hash(password, 5, async function (err, difficultPass) {
      // Store hash in your password DB.
      const users = new UserModule({
        email,
        password: difficultPass,
        name: username,
      });
      await users.save();
      return res.status(200).json({ success: true, message: "Signup Successful" });
    });
  } catch (err) {
    console.log(err);
    res.send('something went wrong! please try again leater...');
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUserDetails = await UserModule.find({ email }); // here we pass the email/pas into the find is useing and-operator
    if (checkUserDetails.length > 0) {
      const hashPassword = checkUserDetails[0].password;
      bcrypt.compare(password, hashPassword, function (err, result) {
        // result == true
        if (result) {
          const token = jwt.sign({ userID: checkUserDetails[0]._id }, 'hush');
          res.send({ msg: 'login Succesfull...', token: token });
        } else {
          res.send(`login Unsuccesfull password ${err}...`);
        }
      });
    } else {
      res.send('login Unsuccesfull...');
    }
  } catch (err) {
    console.log(err);
    res.send('something went wrong! please try again leater...');
  }
});
