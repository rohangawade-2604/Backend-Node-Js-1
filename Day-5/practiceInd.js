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

    else if(req.url === "/pictures"){
        const picturesStrean = fs.createReadStream("../Day-4/write.txt" , {
            encoding: "utf-8",
        });

        picturesStream.pipe(res);
    }

});

server.listen(port, () => {
    console.log("Server is running on port" , port);
});