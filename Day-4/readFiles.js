const files = require('fs');

files.readFile("./read.txt" , {encoding: "utf-8"} , (err,data) => {
    if(data) {
        console.log(data , "data is shown")
    }
    else{
        console.log(err)
    }
});