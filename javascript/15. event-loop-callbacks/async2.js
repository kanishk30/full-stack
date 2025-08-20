let a = true;
console.log("before");

setTimeout(() => {
    a = false;
    console.log("settimeout called...")
}, 1000)

console.log("After");

while(a){
    console.log("while runs...")
}
