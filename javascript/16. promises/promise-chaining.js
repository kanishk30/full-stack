const fs = require("fs")

console.log("before");

const promise = fs.promises.readFile("./f1.txt");
promise
.then(function (data) {
    console.log("File 1 content", data.toString());
    const p2 = fs.promises.readFile("./f222.txt")
    return p2;
})
.catch(err => {
    console.log("catch block1", err);
    return "default_address"
})
.then(function(data){
    console.log("File 2 content", data);
    const p3 = fs.promises.readFile("./f3.txt")
    return p3;
})
.catch(err => {
    console.log("catch block2", err)
})
.then(function(data){
    console.log("File 3 content", data);
})
.catch(err => {
    console.log("catch block3", err)
})

console.log("after");