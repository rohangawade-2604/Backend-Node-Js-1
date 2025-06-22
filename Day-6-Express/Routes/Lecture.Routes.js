const express = require('express');

const lectureRoute = express.Router();

lectureRoute.get('/', (req, res) => {
    res.send('all students');
})

lectureRoute.get('/web13', (req, res) => {
    res.send('web 13 students')
})

lectureRoute.post('/addLecture', (req, res) => {
    console.log(req.body);
    res.send('ok the lecture data wasa added')
});

module.exports = lectureRoute ;....