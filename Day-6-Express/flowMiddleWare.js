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


app.get('/about' , (req , res) => {
    console.log('hello i am about page');
    res.send('about')
})

app.get('/contact' , (req , res) => {
    console.log('hello i am contact page');
    res.send('contact')
})

app.get('/blogs' , (req , res) => {
    console.log('hello i am blogs page');
    res.send('blogs')
})

app.listen(port , () => {
    console.log('Server is running on port ${port}' )
})
