const write = require("fs");

write.writeFile("./write.txt" , "vaibhav jhut bol rha hai" , {encoding:"utf-8"} , (err,data) => {
    if(err){
        console.log("error is show", err)
    }
    else{
        console.log(data)
    };
})