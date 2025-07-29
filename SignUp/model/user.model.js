const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name:String,
        age: Number,
        email:String,
        password:String,
    },

    {versionkey : false}
);

const userModule = mongoose.model('sign_in', userSchema);

module.exports = {userModule}