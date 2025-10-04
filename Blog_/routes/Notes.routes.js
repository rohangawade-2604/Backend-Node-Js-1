const express = require('express');

const { NotesModule } = require('../Model/Notes.model');

const notesRoutes = express.Router();


notesRoutes.get('/', async (req, res) => {
    try{
        const dbNotes = await NotesModule.find();
        res.status(200).send(dbNotes);
    }
    catch(err){
        res.status(401).send({msg:"something went wrong", error: err})
    }
})

notesRoutes.post('/create', async (req, res) => {
    const data = req.body;
    console.log(data, "data is send note routes");

    try {
        const newNotes = new NotesModule(data);
        await newNotes.save();
        res.status(201).send({ msg: "new notes created successfully", payload: data })
    } catch (error) {
        console.log(error)
        res.status(401).send({ msg: "Something went wrong, please try again later ", error: error })
    }
})

module.exports = { notesRoutes }