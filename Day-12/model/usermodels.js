const mongoose = require("mongoose");

const userschema = mongoose.Schema(
    {
        name: String,
        age:Number,
        email: String,
        password:String,
        confirmpassword:String
    },
    {versionKey: false}
);

const UserModule = mongoose.model("h", userschema);

module.exports = {UserModule};