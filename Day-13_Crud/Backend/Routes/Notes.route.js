const express = require("express");

const {NotesModule} = require('../model/Note.model')

const noteRoutes = express.Router();

noteRoutes.get("/", async (req ,res) => {
    const payload =req.body;
    const note = await NotesModule.find();
    res.status(201).send(note);
});

noteRoutes.post("/create", async(req, res) => {
    const payload = req.body;

    console.log(payload, "create method of notes")

    try{
        const newNotes = new NotesModule(payload);
        await newNotes.save();
        res.send({msg: "Notes was created Successfully"})
     }
     catch(err){
        console.log(err)
        res.send({msg: "Something went wrong while creating notes"})
     }
})


noteRoutes.patch("/update/:noteId", async (req , res) => {
    const payload = req.body;
    const noteID = req.params.noteID;

    const userID = req.body.userID;
    const note = await NotesModule.findOne({ _id:noteID});
    console.log(userID, note, payload);

    if(userId !== note.userID){
        res.send(`you are not authorized person in the server..!!!`)
    } 
    else{
        try{
            let newUpdate = await NotesModule.findByIDAndUpdate(
                {
                    _id: noteID,
                },
                payload
            );

            res.send({
                msg: `your task has been successfully updated ${newUpdate} with id ${noteID}`,
            })
        }
        catch(err){
            res.send({msg:err})
        }
    }
});

module.exports = {noteRoutes};