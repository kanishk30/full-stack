// Object.create(proto, propertiesObject)

let a = {};
// same as >
let b = Object.create(null);

let c = {name: "john"}
let d = Object.create({name: "john"})

console.log("empty object literal", a)
console.log("empty with object.create", b)
console.log("object literal", c)
console.log("with object.create", d)

/// ex2

const person = {
  isHuman: false,
  printIntroduction() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);
console.log("me", me)
me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
// me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"
