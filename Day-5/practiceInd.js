const http = require("http");
const fs = require("fs");

const port = 8000;

const server = http.createServer((req , res) => {
    if(req.url === "/Data" && req.method === "POST") {
        let str = "";
        req.on("data", (chunck) => {
            str += chunck;
        });
        req.on("end", () => {
            console.log(str);
            res.end("Data Collected");
        });
    }

    
})