const express = require('express');
const fs = require('fs');

const port = 9500;

const app = express();

app.use(express.json());

const watchman = (req, res, next) => {
    const startTime = Date.now();
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
    res.send('Hello Rohan, welcome to express part');
});