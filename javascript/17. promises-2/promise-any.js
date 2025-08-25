// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));


// const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value)); // quick


const promise1 = Promise.reject(new Error("error in first "));
const p4 = new Promise((resolve, reject) => {
    reject(new Error("Always fails"));
});

const promises = [promise1, p4];
Promise.any(promises).then((value) => console.log(value)); 
