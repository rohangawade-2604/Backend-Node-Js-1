const express = require('express');

const fs = require('fs');

const port = 9000;

const app = express();

app.use(express.json());
app.use(express.text());

app.get('/showData', (req,res) => {
    const data = fs.readFileSync('student.txt', {encoding: 'utf-8'} )
    res.send(data);
    // res.send('Hello Rohan welcome to the Express Database');
});

app.post('/student', (req, res) => {
    fs.writeFileSync('stdnt.json', JSON.stringify(req.body) , 'utf-8');         // this is used to write and create the file in the database in thunderclient

    res.send('student data saved successfully in the database');
})

app.listen(port , () => {
    console.log('Server is running on the port '+ port);
});

