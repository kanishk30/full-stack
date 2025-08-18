let person = {
    name: "john",
    age: 25
}


for(let prop in person){
    console.log("key name - ", prop)
    console.log("key name uppercase - ", prop.toUpperCase())
    console.log("value - ", person[prop])
}