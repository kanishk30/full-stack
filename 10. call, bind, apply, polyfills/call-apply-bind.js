var name = 'jack';
function fn(param1, p2){
    console.log(this.name, param1, p2);
}

fn( "normal param1", "normal param2")

fn.call({name: "jill"}, " i am call", " im param2")
fn.apply({name: "oscar"}, [" i am apply", " im param2"])


// bind

function greet(greeting) {
    console.log(`${greeting}`,  `${this.name}`);
}

greet("welcome")

const person = {name: "bob"};

greet.call(person, "HIIII") // HIIII bob
greet.apply(person, ["HIIIIIII"]) // HIIIIIII bob

const greetBob = greet.bind(person, "Heyyyy, I bind you!!!");
greetBob(); // Heyyyy, I bind you!!! bob