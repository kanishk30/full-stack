let person = {
    name: "john",
    age: 25
}

console.log(Object.entries(person)); // [ [ 'name', 'john' ], [ 'age', 25 ] ]

Object.entries(person).forEach(([key, value]) => {
    console.log(key, value)
})


for(let [k, v] of Object.entries(person)){
    console.log(k, v)
}

/**
 * [ [ 'name', 'john' ], [ 'age', 25 ] ]
    name john
    age 25
    name john
    age 25
 */