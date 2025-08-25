// cfeate Promise.myAll same as Promise.all

// mindmap::
// 1. takes an array as input
// 2. returns a promise
// 3. maintains the order of promises while giving output
// 4. rejects immediately as soon as any promise fails.
// 5. ...
//

Promise.myAll = function(arrayOfPromises) {
    const promise = new Promise(function (resolve, reject) {
        const totalPromisesCount = arrayOfPromises.length;
        const resultArray = [];
        let count = 0;

        arrayOfPromises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(res => {
                    // resultArray.push(res); // ORDER IS NOT MAINTAINED
                    resultArray[index] = res;
                    count++;

                    if(count === totalPromisesCount){
                        resolve(resultArray)
                    }
                })
                .catch((err) => {
                    reject(err)
                })
        })
    })

    return promise
}

const p1 = Promise.resolve(100);
const p2 = 40;
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(200)
    }, 5000)
})

Promise.myAll([p3, p1,p2])
    .then((res) => {
        console.log("resolved: ", res)
    }) 