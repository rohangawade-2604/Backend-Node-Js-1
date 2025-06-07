const http = require("http");
const fs = require("fs");

const port = 8000;

const server = http.createServer((req, res) => {
    if(req.url === "/addData" && req.method === "POST"){
        let str = "";
        req.on("data", (chunk) => {
            str += chunk; 
        }); 
        
        req.on("end", () => {
            console.log(str);
            res.end("I received the data");
            console.log("Data adding")
        });
        
    }

    else if(req.url === "/movies"){
        const moviesStream = fs.createReadStream("../Day-4/read.txt", {
            encoding: "utf-8",
        });
        moviesStream.pipe(res);
    }
});

server.listen(port, () => {
    console.log("Server is running on port", port);
});