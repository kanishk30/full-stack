console.log("before");

function fn1(){
    console.log("inside fn1")
}
function fn2(){
    console.log("inside fn2")
}

setTimeout(fn1,4000)
setTimeout(fn2,2000)
// fn()
console.log("after")