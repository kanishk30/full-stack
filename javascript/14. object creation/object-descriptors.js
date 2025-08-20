const user = {
    name: "Bob"
}

console.log(user)

console.log(Object.getOwnPropertyDescriptor(user, "name"))
// {
//     "value": "Bob",
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
// }

const obj1 = {};

Object.defineProperty(obj1, "prop1", {
    value: 25,
    writable: false,
    enumerable: true
})

console.log(obj1.prop1); // 25
obj1.prop1 = 100;
console.log(obj1.prop1); // still 25 AND error in "use strict" mode

console.log(Object.keys(obj1))

const person = {}

// define multiple at once.

Object.defineProperties(person, {
    name: {
        value: "Alice",
        writable: true
    },
    age: {
        value: 30,
        writable: false,
        enumerable: false
    }
})