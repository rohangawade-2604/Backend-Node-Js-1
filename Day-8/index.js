const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

const { connections, UserModules } = require('./dbs');

app.get("/", async (req, res) => {
    try {
        const addManyData = await UserModules.updateMany({}, { $set: data});
        res.send(addManyData);
        console.log('Data was added in every documents');
    }
    catch(err){
        console.log(err)
    }
});

app.get("/user", async (req, res) => {
    const params = req.query;
    try{
        const users = await UserModules.find(params);
        res.send(users);
        } catch(err){
        console.log(err);
        res.send({err: "Something went wrong while fetching users data inside in it"})
    }
});

app.post("/createuser", async(req, res) => {
    try{
        let payload = req.body;
        
        //* this is the way we insert data in mongo db formats 
        //await UserModules.insertMany([payload]);

        //? now we insert the data in mongoose way
        // in case if you inserting in one data use this code write below

        const payloadMongooseWay = new UserModules(payload);
        await payloadMongooseWay.save();
        res.send("successfully created user");
    }catch(err){
        console.log(err);
        res.send({err: "Something went wrong"})
    }
});

app.put("/userupdate/:userId", async (req, res) => {
    const userId = req.params.userid;
    console.log(userId)
    const payload = req.body;
    try {
        const query = await UserModules.findByIdAndUpdate({ _id: userId },  payload);
        console.log(query);
        res.send("User updated successfully");    
    } catch (err) {
        console.log(err);
        res.send({err: "Something went wrong while updating user data"})
    }        
});

app.delete("/deleteuser/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
        const query = await UserModules.findByIdAndDelete({ _id: userId });
        res.send("User ${userId} deleted successfully");
    } catch (err) {
        console.log(err);
        res.send({err: "Something went wrong while deleting user data"})
    }
});

app.listen(process.env.port, async () => {
    try{
        await connections;
        console.log("Connected to MongoDB successfully");
    }
    catch(err){
        console.log(err)
        console.log("Error connecting to MongoDB:", err);
    }
    console.log(`Server is running on port ${process.env.port}`);
});
    