const express = require('express')

const port = 7000;

const app = express()

app.use((req , res , next) => {
    console.log('a')
    next();
    console.log('b')
})

app.use((req , res , next) => {
    console.log('c');
    next();
    console.log('d');
})

app.get('/', (req , res) => {
    console.log('e');
    res.send('Hello rohan , welcome to express part')
});


app.get('/about' , (res , req) => {
    console.log('hello i am about page');
    res.send('about')
})

app.get('/contact' , (res , req) => {
    console.log('hello i am about page');
    res.send('about')
})

app.get('/blogs' , (res , req) => {
    console.log('hello i am about page');
    res.send('about')
})

app.listen(port , () => {
    console.log('Server is running on port ${port}' )
})
