const fs = require("fs")

console.log("before");

fs.readFile("./f1.txt", function(err, data) {
    if(err) console.log("error" , err)
    else {
        console.log("file 1content", data.toString());
        fs.readFile("./f2.txt", function(err, data) {
            if(err) console.log("error" , err)
            else {
                console.log("file2 content", data.toString());
                    fs.readFile("./f3.txt", function(err, data) {
                        if(err) console.log("error" , err)
                        else console.log("file3 content", data.toString())
                    })
        
            } 
        })
    }
})



console.log("after")