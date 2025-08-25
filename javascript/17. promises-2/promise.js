console.log("First question:: ")
Promise.resolve(100)
.then(data => console.log("Success: ", data))
.catch(err => console.log("Error: ", err))
.finally(() => console.log(" i will run as i m in finally 1"))


console.log("Second question:: ")

Promise.reject(200)
.then(  data => console.log("Success: ", data), 
        err => {console.log("error occurs in cb of then", err)}
)
.catch(err => console.log("Error: ", err))
.finally(() => console.log(" i will run as i m in finally 2"))
.finally(() => console.log(" i will run as i m in finally 3"))
