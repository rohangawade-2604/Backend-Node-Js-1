const express = require('express');
const fs = require('fs');
const port = 7000;


const app = express();

// middleware to log the time taken for each request
const watchmam = (req , res , next) => {
    if(req.url === '/about'){
        next();
    }
    else{
        res.send('plz come late to this page');
    }
}

app.use(watchmam);


app.get('/', (req, res) => {
    console.log('Hello i am from the base route....')
    res.send('welcome');
})

app.get('/contact', (req, res) => {
    console.log('Hello i am from the contact page....')
    res.send('contact');
})

app.get('/about',(req, res)=> {
    console.log('Hello i am from the about page....')
    res.send('about');
})

app.get('/blogs', (req, res)=> {
    console.log('hello i am from the blogs page...')
    res.send('blogs');
})

app.listen(port,() => {
    console.log('server is running on port ${port}')
})

