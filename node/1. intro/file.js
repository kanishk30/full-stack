const fs = require('fs');

// read the content of s file.
fs.readFile("file.txt", (err, data) => {
  if (err) throw err;
  console.log(data); // buffer
  console.log(data.toString()); // english
});

// write the content in a file.

fs.writeFile('file.txt',  'Hello from Node.js writeFile module@@@@!!!', 'utf8', (error) => {
    if(error){

        console.log(error);
        return;
    }
    console.log("file written successfully.")
})

fs.rename("file-new.txt", "file.txt", () => {})

// stats

fs.stat("file.txt", (err, stat) => {
    console.log("size: ", stat.size)
    console.log("is directory?: ", stat.isDirectory())
})