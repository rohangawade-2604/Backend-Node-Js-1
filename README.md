# Important Question And Answers for Node.js 

### Why we use 'end()' in http Server ?

-  Calling the writable.end() method signals that no more data will be written to the Writable. The optional chunk and encoding arguments allow one final additional chunk of data to be written immediately before closing the stream.

- Calling the write method after calling end will raise an error.

______________________________________________________________________________________


### how http server is being Created ?

- function createServer<typeof http.IncomingMessage, typeof http.ServerResponse>(requestListener?: http.RequestListener<typeof http.IncomingMessage, typeof http.ServerResponse> | undefined): http.Server<...> (+1 overload)
Returns a new instance of Server.

- The requestListener is a function which is automatically added to the 'request' event.

______________________________________________________________________________________

### What is Pipe in Node.js

- Piping in Node.js is a method used to connect a readable stream to a writable stream, allowing data to flow automatically from the source to the destination. The pipe() method is used to achieve this, making it easy to handle data streaming operations with minimal code.

- when a request is made to the server, it reads data from source.txt and pipes it directly to the response object, which is a writable stream.

______________________________________________________________________________________


# Express.js Learning

### Steps

- first steps to install the express package cmd `npm i express` and nodemon package cmd `npm i nodemon`

### What is next() in express.js
- In Express.js, next() is a function that is passed as the third argument to middleware functions. It is used to pass control to the next middleware function in the stack. 

- next() essentially says "I'm done with my part, let the next middleware function handle the request."

____

### What are the MiddleWares in Express.js ?
- In Express.js, Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle. These functions are executed sequentially and can perform various tasks before the final route handler is invoked. 



