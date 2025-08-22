const fs = require("fs")

console.log("before");

const promise = fs.promises.readFile("./f1.txt");
console.log(promise)

console.log("after");

// setTimeout(() => {
//     console.log("after file read...");
//     console.log(promise)
// }, 2000)

promise
.then(function (value){
    console.log("prpmise successful...")
    console.log("data of file1", value.toString())
})
.catch(function(err){
    console.log("promise fsiled..")
    console.log("error: ", err)
})


const mypromise = new Promise(function(resolve, reject) {
    //...
})

console.log(mypromise, "mypromise"); // Promise { <pending> } mypromise