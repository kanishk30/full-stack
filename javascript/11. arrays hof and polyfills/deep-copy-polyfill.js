let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    doesSmoke: false,
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    friends: ["Steve", "Nikola", "Ray", { name: "Jai", lastName: "Roy" }, []],
    // fn: function(){console.log("I am a fn.")}
};

let superDeepCloned = (obj) => {
    // check for array case.
    const isArr = Array.isArray(obj);
    let cloning = isArr ? [] : {}

    for(let prop in obj){
        if(Array.isArray(obj[prop])){
            cloning[prop] = [...obj[prop]];
            for(let i = 0 ; i < obj[prop].length; i++){
                if(typeof cloning[prop][i] === "object"){
                    cloning[prop][i] = superDeepCloned(obj[prop][i])
                }
            }
        } else if(typeof obj[prop] === "object"){
            cloning[prop] = superDeepCloned(obj[prop])
        } else {
            cloning[prop] = obj[prop];
        }
    }
    return cloning;
    
    // check for object case.
}

let deepObj = superDeepCloned(person); // this could be object or array.
deepObj.lastName = "Carrey";
deepObj.address.street = "South 2nd street";

console.log("person", person)
console.log("deepObj", deepObj)








// let array = ["Steve", "Nikola", "Ray", { name: "Jai", lastName: "Roy" }];

// // for (let prop of array) {
// //     console.log(prop)
// // }
// // for (let prop2 in person) {
// //     console.log(prop2)
// // }