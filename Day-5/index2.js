const http = require("http");
const fs = require("fs");

const port = 7500;

const server = http.createServer((req, res) => {
    if(req.url ==="/") {
        res.setHeader("Content-Type" , "text/html");
        res.end("<h1>Hey we have the values...!</h1>")
    }
    else if(req.url === "/notes"){
        res.write("here we have the values of somethings");
        res.end();
    }
    else if (req.url === "/note"){
        fs.readFile("./index1.js", {encoding : "utf-8" }, (err, data) => {
            if(err){
                res.end(err);
            }else{
                res.end(data);
            }
        });
    }
    else{
        res.end("Invalid API endpoints , plz refer API docs");
    }
});

server.listen(port, () => {
    console.log("Server running on port 7500", port);
})