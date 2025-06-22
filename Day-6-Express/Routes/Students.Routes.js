const express = require('express');

const studentRoute = express.Router();

studentRoute.get('/' , (req, res) => {
    res.send('all students');
})

studentRoute.get('/web20' , (req, res) => {
    res.send('web 20 students')
})

studentRoute.post('/addLecture', (req,res) => {
    console.log(req.body);
    res.send('ok the lecture data wasa added')
});

module.exports = studentRoute;