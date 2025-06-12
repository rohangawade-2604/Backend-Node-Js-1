const express =require ('express');

const port = 9800;

const app = express();

app.use((req ,res, next) => {
    console.log('hello i am the middleware');
    next();
    console.log('hello i am rohan gawade next middleware')
});
hfjdklahfjkdshafjkdsha
