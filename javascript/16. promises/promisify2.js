// orriginal callback style
function fetchUserData(callback){
    setTimeout(() => {
        const success = false;

        if(success){
            callback(null, {id: 1, name: "John"})
        } else {
            callback(new Error("Failed to fetch user data", null))
        }

    }, 1000)
}

// convert to promise based.

function fetchUserDataPromise(){
    return new Promise((resolve, reject) => {
        fetchUserData(function(error, data){
            if(error){
                reject(error)
            } else {
                resolve(data)
            }
        })
    })
}

// consumption.
fetchUserDataPromise()
.then(user => {
    console.log("user data : ", user)
})
.catch(err => console.log("CATCH BLOCK", err))