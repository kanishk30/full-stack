let first = "created using let";
var second = "created using var";
console.log("hello from", this); // window

console.log(second) ; // "created using var"
console.log(window.second) ; // "created using var"

console.log(first) ; // created using let
console.log(window.first); // undefined

/**
 * 
let cap = {
    firstName : "Steve",
    sayHi : function(){
        console.log("hi from", this.firstName);
    }
}
cap.sayHi(); // hi from steve
let sayHiAdd = cap.sayHi;
sayHiAdd(); // // hi from undefined

*/


let cap = {
    firstName : "Steve",
    sayHi : function(){
        console.log("hi from", this.firstName);
    }
}
cap.sayHi(); // hi from steve
var firstName = "Loki";
let sayHiAdd = cap.sayHi;
sayHiAdd(); // // hi from Loki