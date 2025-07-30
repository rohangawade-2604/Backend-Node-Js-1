const mongoose = require("mongoose");

const Connections = mongoose.connect(process.env.MongoDb_Url);

module.exports =  {Connections}