const mongoose = require("mongoose");

const Connections = mongoose.connect(process.env.MongoDB_Url);

module.exports =  {Connections}