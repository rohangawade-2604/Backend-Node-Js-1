const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('accpeted data');
});

app.post('/addDetails' , (res, req) => {
    console.log(req);
    console.log(req.body);
    res.send('Accepted data from rohan gawade')

});

app.listen(7000, () => {
    console.log('port listen on 7000');
})