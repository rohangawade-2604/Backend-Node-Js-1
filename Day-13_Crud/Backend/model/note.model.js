const mongoose = require('mongoose');

const notesSchema = mongoose.Schema(
    {
        title:String,
        note: String,
        category: [],
        userId: String,
    },

    {versionKey: false}
);

const NotesModule = mongoose.model("notes", notesSchema)

module.exports = {NotesModule};