const express =require ('express');

const port = 9800;

const app = express();

app.use((req ,res, next) => {
    console.log('hello i am the middleware');
    next();
    console.log('hello i am rohan gawade next middleware')
});


// Middleware to log the request method and URL

app.use((req, res,next) => {
    let auth = true;                                                     // Simulating an authentication check                                    
    if (!auth) {                                                            
        res.send('you are not authorized to view this page ')
    }
    else{
        next();
        console.log('Welcome rohan Gawade ')
    }
})



app.get('/', (req, res) => {
    console.log('Hello i am from the base route...');
    res.send('welcome');
})

app.get('/contact', (req, res) => {
    console.log('Hello i am from the contact...');
    res.send('contact');
})

app.get('/about', (req, res) => {
    console.log('Hello i am from the about...');
    res.send('about');
})

app.get('/blogs', (req, res) => {
    console.log('Hello i am from the blogs...');
    res.send('blogs');
})

app.listen(port,()=> {
    console.log('port is active ${port');
});

