const epxress = require('express');

const dataRouter = epxress.Router();

dataRouter.get('/', (req, res) => {
    res.send('Data route is working')
});

dataRouter.get('/men', (req, res) => {
    res.send('men route is working')
});

dataRouter.post('/addData', (req,res) => {
    console.log(req.body);
    res.send('all data here...')
});

module.exports = dataRouter;