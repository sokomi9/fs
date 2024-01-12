const fileSystem =  require("node:fs");

//reading a file using synchronous statements
const contents = fileSystem.readFileSync("./file.txt", "utf-8");
 console.log(contents);
 //asynchromous statement
 fileSystem.readFile("./file.txt", "utf-8", (error, data)=>{
    if(error){
        console.log(error)
    } else {
        console.log(data);
    }
 }); 

 //writing a file
 //1. synchronous method
 fileSystem.writeFileSync("./greet.txt", "Hello Abiud!");
 //2. asynchronous method
 fileSystem.writeFile("./greet.txt", " I hope you are fine.", {flag:"a"}, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("File appended!");
    }
 });
