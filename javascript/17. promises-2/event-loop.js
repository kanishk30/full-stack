console.log("start")
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("timer inside new promise")
        resolve("done!!")
    }, 1000)
})

p.then((value) => {
    console.log("promise resolved with: ", value)
})

console.log("end")