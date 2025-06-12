const express = require('express');

const fs = require('fs');

const port = 9000;

const app = express();

app.use(express.json());

app.use(express.text());

app.get('/showData', (req,res) => {
    const data = fs.readFileSync('stdnt.json', 'utf-8')         //this is used to read the file form the database which we can get the data and read the data inside in it
    res.send(data);
});

app.delete('/remove' , (req , res) => {
     fs.rm('stdnt.json' )                               //this is used to delete the file from the database using delete method from the thunderclient
    res.send("Data is been deleted");
})

app.post('/student', (req, res) => {
    fs.writeFileSync('stdnt.json', JSON.stringify(req.body) , 'utf-8');         // this is used to write and create the file in the database in thunderclient
    res.send('student data saved successfully in the database');
})

app.post('/update', (req, res) => {
    fs.appendFileSync('stdnt.json' , JSON.stringify(req.body,) + ('\n') , 'utf-8')          // this is used to update the text either the json data and add some data in the json or text file using the post methond so we can post the updated data inside the thunder client in it
    res.send('Student data is been updated successfully');
})

app.listen(port , () => {
    console.log('Server is running on the port '+ port);
});

