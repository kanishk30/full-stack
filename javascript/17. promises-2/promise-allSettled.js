// const p1 = Promise.resolve(100);
// const p2 = 40;
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(200)
//     }, 5000)
// })

// Promise.all([p3, p1,p2])
//     .then((res) => {
//         console.log("resolved: ", res)
//     }) 


const p1 = Promise.resolve(100);
const p2 = 40;
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(200)
    }, 5000)
})
const p4 = Promise.reject("Promise rejected")

const p5 = new Promise((res, rej) => {
    setTimeout(() => {
        rej("timeout rejected")
    }, 500)
})

Promise.allSettled([p3, p1,p2, p4, p5])
    .then((res) => {
        console.log("resolved: ", res)
    }) 
    .catch((err) => {
        console.log("rejected: ", err)
        
    })