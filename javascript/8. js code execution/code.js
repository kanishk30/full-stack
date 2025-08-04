// var a = 10;
// function fn(){
    
//     console.log("i am fn");
//     function inner(){
//         console.log("i am inner function.")
//     }
    
//     inner();
// }

// fn();

console.log(x);     // undefined (var is hoisted)
// console.log(y);     // ReferenceError: Cannot access 'y' before initialization
console.log(foo()); // "Hello from foo"

var x = 10;
let y = 20;

console.log(x); 
console.log(y);  

function foo() {
    return "Hello from foo";
}
