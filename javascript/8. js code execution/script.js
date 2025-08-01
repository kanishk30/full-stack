console.log("Hi, JS");

let a = 1;
let b = 2;
let sum = a+b;
console.log(sum); // 3

let c;
console.log("c: ", c); // undefined

var d = 3;
var e = 4;
var sum2 = d+e;
console.log("sum2", sum2); // 7

var f;
console.log("f : ", f); // undefined


// TYPES / DATATYPES
console.log("typeof examples: ")
console.log(1, typeof 1) // number
console.log(-1, typeof -1) // number
console.log(1.3, typeof 1.3)  // number

console.log("hello", typeof "hello") // string
console.log('hello', typeof 'hello') // string
console.log(`hello`, typeof `hello`) // string
console.log(`i am doing well.`, typeof `i am doing well.`) // string

console.log(true, typeof true) // boolean
console.log(false, typeof false) // boolean

console.log(typeof typeof false) // string

console.log(null, typeof null) // 'object' : " MISTAKE done by Brendan Eich "

console.log(undefined, typeof undefined) // undefined
console.log(typeof typeof undefined) // string [ SAME AS BELOW ]
console.log(typeof 'undefined') // string


let obj = {
    name: 'John',
    age: 25
};
console.log(obj) // {"name": "John","age": 25 }
console.log(obj.name) // John

console.log("typeof obj > ", typeof obj) // object

let arr = [10,20,30,40];

console.log("typeof arr > ", typeof arr); // object

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

let currentDate = new Date();
console.log(currentDate);

// string concatenation.

console.log("My name is " + obj.name); // My name is John
console.log("My name is " + obj.name + '. I am ' + obj.age  + ' years old.'); // My name is John. I am 25 years old.

// concatenation using backticks.

console.log(`My name is ${obj.name}`)
console.log(`My name is ${obj.name}. I am ${obj.age} years old.`)

// CORRECT Way to variable is an array?
console.log("typeof arr > ", typeof arr); // object

console.log("Array.isArray(arr) > ", Array.isArray(arr)); // true
console.log("Array.isArray(hello) > ", Array.isArray("hello")); // false
console.log("Array.isArray({}) > ", Array.isArray({})); // false



// non primitive functions.

function fun(param1){
    console.log("Hello world, ", param1)
}

fun("Whatsup!"); // Hello world,  Whatsup!

fun(); // Hello world,  undefined


// Objects

let obj2 = {
    name: 'Jane',
    age:20,
    address: {
        street: "Civil lines",
        house: "C-121",
        pin: 231001,

    },
    hobbies: ['cook', 'exercise'],
    doesSmoke: false,
    experience: {
        tcs: {
            yrs: 2,
            role: "SDE"
        },
        infy: {
            yrs: 1,
            role: "Sr. SDE"
        }
    }
}

console.log(obj2.name)
console.log(obj2['age']);

console.log(obj2.address.street)
console.log(obj2.hobbies)
console.log(obj2.experience.tcs.role);

// loops

let arr2 = ['a', 'b', 'c'];

// simple for loop
for(let i = 0; i < arr2.length; i++){
    console.log(arr2[i])
}

// for of loop - ARRAY

console.log("for of loop starts ---")
for( let char of arr2){
    console.log(char)
}

// for in loop - OBJECT

console.log('for in loop (objects) ---')

for(let item in obj2 ){
    console.log(item); // name
    console.log(obj2[item]); // jane
    console.log(obj2.item); // undefined
}


let cap = {
    name:"Steve",
    age: 34,
    isAvenger: true,
    }
for(let key in cap){
    console.log(key, " ", cap[key], " ", cap.key);
    // name  Steve undefined
    // age  34 undefined
    // isAvenger  true undefined
}
