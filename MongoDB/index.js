const express = require('express');

const port = 9000;

const app = express();

const {dataRouter} = require('./Routes/dataRoutes');  // Routing part 

app.use(express.json());

app.use('/data', dataRouter)

app.get('/', (req, res) => {
    res.send('hello world')
});

app.get('/about', (req, res) => {
    const {course} = req.query;
    res.send('This is about page ${course}') 
})

app.get('/weather', (req,res) => {
    const data = {
        banglore:'winter',
        mumbai: 'haay garmi',
        delhi: 'barish',
        ghar: 'chadar le ke so jao'
    }
    const city = req.query.city;
    const weather = data[city];
    res.send(`today weather is ${city} is ${weather}`);
});

app.get('/students/:studentID', (req, res) => {
    const ID = req.params.studentID;
    res.send(`Here is the data of student with ID is ${ID}`)
})

app.post('/addData', (req, res) => {
    console.log(req.body);
    res.send('Data received successfully');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});