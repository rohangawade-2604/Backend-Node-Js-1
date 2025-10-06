const express = require('express');

const { NotesModule } = require('../Model/Notes.model');

const notesRoutes = express.Router();

// read
notesRoutes.get('/', async (req, res) => {
    try {
        const dbNotes = await NotesModule.find();
        res.status(200).send(dbNotes);
    }
    catch (err) {
        res.status(401).send({ msg: "something went wrong", error: err })
    }
})

// create
notesRoutes.post('/create', async (req, res) => {
    const data = req.body;
    let data2 = { ...req.user, ...data };
    console.log("🚀 ~ req:", req)
    console.log(data, "data is send note routes");

    try {
        const newNotes = new NotesModule(data2);
        await newNotes.save();
        res.status(201).send({ msg: "new notes created successfully", payload: data2 })
    } catch (error) {
        console.log(error)
        res.status(401).send({ msg: "Something went wrong, please try again later ", error: error })
    }
})

// update
notesRoutes.patch('/edit/:nodeIDs', async (req, res) => {
    const data = req.body;

    const nodeID = req.params.nodeIDs;

    const UserchiID = req.user.userID    // called from authentication middleware //
    console.log(UserchiID, "user id in notes routes");

    const notes = await NotesModule.findOne({ _id: nodeID })

    if (UserchiID !== notes.userID) {

        console.log("you are not authorized person in the website")

    } else {

        try {
            let noteUpdates = await NotesModule.findByIdAndUpdate({ _id: nodeID }, data)

            res.send({ msg: `your task has been updated successfully ${noteUpdates} with it ID ${nodeID}` })
        } catch (error) {
            console.log(error, "you found an error")
        }
    }

})

//delete
notesRoutes.delete('/delete/:nodeIDs', async (req, res) => {

    const data = req.body;

    const nodeID = req.params.nodeIDs;

    const UserchiID = req.user.userID    // called from authentication middleware //
    console.log(UserchiID, "user id in notes routes");

    const notes = await NotesModule.findOne({ _id: nodeID })

    if (UserchiID !== notes.userID) {

        console.log("you are not authorized person in the website")

    } else {

        try {
            let noteDelete = await NotesModule.findByIdAndDelete({ _id: nodeID }, data)
            console.log("🚀 ~ noteDelete:", noteDelete);
            

            res.send({ msg: `your task has been Deleted successfully with it ID ${nodeID}` })
        } catch (error) {
            console.log(error, "you found an error")
        }
    }   

})


module.exports = { notesRoutes }