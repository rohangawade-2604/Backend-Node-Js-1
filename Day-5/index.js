const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url ==="/")  res.end("WELCOME ROHAN GAWADE");
    else if(req.url === "/report")  res.end("WELCOME TO REPORT PAGE");

});

server.listen(8000, ()=> {
    console.log(`Server is running on port 8000`);
})