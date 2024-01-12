const read = require("node:fs");

read.readFile("./file.txt", "utf-8", (data, err)=>{
if(err){
    console.log(err);
}else{
    console.log(data);
}
})
