const express = require('express')
const fs = require('fs')
const cors =require('cors')
const port = 9000;

const studentRouter = require('./Routes/Students.Routes');
const lectureRoute = require("./Routes/Lecture.Routes");

const app = express();

app.use(express.json());
app.use(express.text());


app.use('/student',studentRouter)


app.use(
    cors({
        origin:"example:website",
        methods:"GET",
    })
);

app.use("/lecture", lectureRoute);

app.get('/', (req, res) => {
    res.send('Hello, welcome to the Express server!');
});

app.post('/addStudent', (req, res) => {
    console.log(req.body);
    res.send('got the data...');
})

app.get('/contact', (req, res) => {
    console.log('hello i am from contact page');
    res.send('contact');
})

app.get('/about', (req, res) => {
    console.log('hello i am from about page');
    res.send('about');
})

app.get('/blogs', (req, res) => {
    console.log('hello i am from blogs');
    const data = fs.readFileSync('./simpleMiddleWare.js', 'utf-8');
    res.send(data);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});