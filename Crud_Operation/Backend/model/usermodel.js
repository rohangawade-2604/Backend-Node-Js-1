const mongoose = require("mongoose");

const userschema = mongoose.Schema(
    {
        name: String,
        age:Number,
        email: String,
        password:String,
    },
    {versionKey: false}
);

const UserModule = mongoose.model("sign_in",userschema)

module.exports = {UserModule};