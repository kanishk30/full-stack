// // // catching errors in promise.
// // const fs = require("fs");

// // const rejectedPromise1 = Promise.reject("Explicit rejection");
// // rejectedPromise1.catch(e => console.log("Error1 caught: ", e))

// // const fileRejPromise2 = fs.promises.readFile("./f111.txt");
// // fileRejPromise2.catch(e => console.log("Error1 caugh in file promise: ", e))


// // 3rd way. throw new Error in then

// Promise.resolve("Initial value")
// .then(data => {
//     console.log("Data: ", data);
//     throw new Error("Error from then")
// })
// .catch(e => console.log("Cautht throw error in catch",  "Error class: ", e,  "just the message: ", e.message))

// finally case

Promise.resolve("Initial value")
.finally((data) => {
    console.log("data in finally", data)
    return "Finally resolved"
})
.then((result) => {
    console.log("resolved in then: ", result)
})
// data in finally undefined
// resolved in then:  Initial value