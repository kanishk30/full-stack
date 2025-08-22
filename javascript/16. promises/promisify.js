// basic callback function

function getData(callbackFn){
    // api call...
    setTimeout(() => {
        const userOrder = "abc12345";
        callbackFn(userOrder)
    }, 1000)
}

function getDataPromise(){
    const promise = new Promise((resolve, reject) => {
        getData((value, err ) => {
            if(err){
                reject(err)
            } else {
                resolve(value)
            }
        })
    })

    return promise;
}

getDataPromise()
    .then((data) => {
        console.log("Data: ", data)
    })
    .catch(err => console.log("Error: ", err))