const mongoose = require('mongoose');

const NotesSchema = mongoose.Schema({
    userID: String,
    title:String,
    note:String,
    category:[]
},
{versionKey: false}
)

const NotesModule = mongoose.model("note", NotesSchema);

module.exports = { NotesModule }