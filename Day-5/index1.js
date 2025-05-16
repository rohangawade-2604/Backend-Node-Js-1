const http = require("http");
const port = 7500;

const server = http.createServer((req , res) => {
    console.log(`req` , req)

    if(req.url === "/") res.end("Hello rohan")
        else if(req.url === "/report") {
            res.write("Hello Rohan Gawade , here we have your reports...! \n")
            res.write("Hello Rohan Gawade , here we have your reports2...! \n")
            res.write("Hello Rohan Gawade , here we have your reports3...! \n")

            res.end();
        }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})