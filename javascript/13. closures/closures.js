"use strict"
function outerFunction(){
    let count = 0;
    function innerFunction(){
        count++;
        return count;
    }
    return innerFunction;
}

const innerFn = outerFunction();

console.log(innerFn())
console.log(innerFn())
console.log(innerFn())