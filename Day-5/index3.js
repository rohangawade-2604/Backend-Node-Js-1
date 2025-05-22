const http = require("http");
const fs = require("fs");

const port = 8000;

const server = http.createServer((req, res) => {
    if(request.url === "/addData" && request.method === "POST"){
        let str = "";
        request.on("data", (chunk) => {
            str += chunk; 
        });
        
        request.on("end", () => {
            console.log(str);
        });
        Response.end("I received the data");.
        
    }

    else if(request.url === "/movies"){
        const moviesStream = fs.createReadStream("../Day-1/leacture.txt", {
            encoding: "utf-8",
        });
        moviesStream.pipe(response);
    }
});

server.listen(port, () => {
    console.log("Server is running on port", port);
});