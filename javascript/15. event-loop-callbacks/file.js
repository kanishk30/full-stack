const fs = require("fs");

console.log("before");

const content = fs.readFileSync('./f1.txt').toString()
fs.readFile(('./f1.txt'), function(err, data) {
    console.log("async data", data.toString())
})
console.log("sync", content);
console.log("After")

/**
 * 
 * before
sync Hello, I am f1 file.
After
async data Hello, I am f1 file.
 */