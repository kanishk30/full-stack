function quickResolve() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Quickly resolved"), 500);
    });
}

function slowResolveOrFastReject() {
    return new Promise((resolve, reject) => {
        // setTimeout(() => resolve("Slowly resolved"), 2000);
        setTimeout(() => reject(new Error("Quickly rejected")), 100);
    });
}


// mind map
/**
 * takes an array of promises
 * returns single promise resolved or rejected value ( no array ) whichever is first
 */

Promise.myRace = function(promisesArray){
    const promise = new Promise((resolve, reject) => {
        
        promisesArray.forEach(prom => {
            Promise.resolve(prom)
                .then((resolve))
                .catch(reject)
        })
    })

    return promise
}

Promise.myRace([quickResolve(), slowResolveOrFastReject()])
    .then(result => {
        console.log("result: ", result)
    })
    .catch(err => {
        console.log("Error: ", err)
    })
