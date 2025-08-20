const user = {
    name: "Bob",
    age: 30,
    address: {
        city: "delhi"
    }
}

Object.freeze(user);

user.age = 20
user.name = 'Alice'

user.address.city = 'mumbai' // ONLY SHALLOWLY FREEZES

delete user.name
console.log(user); // { name: 'Bob', age: 30, address: { city: 'mumbai' } }