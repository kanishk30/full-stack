let person = {
    name: "John",
    age: 25,
    canCodeUI(){
        return "Sorry, cant code UIs"
    }
}

let user = {
    canCook: true,
    canCodeAPI(){
        return "Sorry, cant code APIs"
    },
    // inherited properties & methods of person object.
    __proto__: person
}

console.log(user.name); // John
console.log(user.canCodeUI()); // Sorry, cant code UIs
console.log(user.canCodeAPI()); // Sorry, cant code APIs


// with functions

function Candidate(name){
    this.name = name;
}

Candidate.prototype.greet = function(){
    console.log(`hello, I am ${this.name}`)
}
const alice = new Candidate("Alice");
alice.greet(); // hello, I am Alice


// using object.create

const animal = {
    eats: true
}

const dog = Object.create(animal);
dog.barks = true;

console.log("dog eats: ", dog.eats); // dog eats:  true

// getPrototypeOf(obj)

console.log(Object.getPrototypeOf(dog)); // { eats: true }
console.log(Object.getPrototypeOf(dog) === animal); // true

// setPrototypeOf(obj, proto)

let bird = {
    fly: true
}

let ostrich = {
    layEggs: true
}
Object.setPrototypeOf(ostrich, bird)

console.log(ostrich.fly); // true

// CAUTION: use Oject.create insteadof setPrototypeOf, since setPrototypeOf is slower. ( prf issues)