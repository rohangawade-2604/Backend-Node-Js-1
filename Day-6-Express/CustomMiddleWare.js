const express = require('express');
const fs = require('fs');

const port = 9500;

const app = express();

app.use(express.json());

const watchman = (req, res, next) => {
    const startTime = Date.now();
    if(!req.body) {
        req.body = {};
    }
    req.body.server = 'Rohan is web developer';
 
    next();
    const endTime = new Date().getTime();
    console.log(endTime - startTime);
};

const logger = (req, res, next) => {
    fs.appendFileSync('./log.txt' , '\n' + req.method + '' + req.url , 'utf-8');
    next();
};

app.use(watchman , logger);

app.get('/' , (req , res) => {
    console.log('e');
    console.log(req.body.server);
    res.send('Hello Rohan, welcome to express part');
});

app.post('/addStudent', (req, res) => {
    console.log(req.body);
    res.send('got the data...')
})

app.get('/contact', (req,res) => {
    console.log('hello i am from contact page');
    res.send('contact');
})

app.get('/about', (req,res) => {
    console.log('hello i am from about page');
    res.send('about');
})

app.get('/blogs', (req, res) => {
    console.log('hello i am from blogs')
    const data = fs.readFileSync('./simpleMiddleWare.js', 'utf-8');
    res.send(data);
})

app.listen(port, () => {
    console.log('server is running on port ${port}')
})

