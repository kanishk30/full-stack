// pre-ES6 constructor function.
function Person(name){
    this.name = name;
}

// Adding a method to this prototype.

Person.prototype.fetchName = function(){
    return "Mr. " + this.name;
}

// creating instances
const john = new Person("john")
const alice = new Person("alice")
const bob = new Person("bob")
const oscar = new Person("oscar")
console.log(john.fetchName());
console.log(alice.fetchName());
console.log(bob.fetchName());
console.log(oscar.fetchName());


// ES6 Classes

class Human {
    constructor(name){
        this.name = name;
    }

    fetchName(){
        return this.name;
    }
}

const john2 = new Human("john")
console.log(john2.fetchName()); // john
