const mongoose = require('mongoose');

const SignupSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
},
    { versionkey: false }
)

const UserModule = mongoose.model("signup", SignupSchema)

module.exports = { UserModule }