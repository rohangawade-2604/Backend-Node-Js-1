const mongoose = require("mongoose");

require("dotenv").config();

const connections = mongoose.connect(process.env.MongoDBurl);

const userSchema = new mongoose.Schema({
    name: String,
    age : Number,
    legal: Boolean,
    city: String,
    language:String,
    profession: String,
    org: String,
})

const UserModules = mongoose.model("user", userSchema);

module.exports = {connections, UserModules};