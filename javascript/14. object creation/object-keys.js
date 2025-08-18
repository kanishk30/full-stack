let person = {
    name: "john",
    age: 25
}

// Object.keys(obj)

let keynames = Object.keys(person);
console.log(keynames) // ['name', "age"]

Object.keys(person).forEach(key => {
    console.log(key, person[key])
})
