let obj = {
    firstname: "john",
    lastname: "doe",
    address: {
        street: "Civil lines",
        house: "21-B"
    },
    age: 25
};

let deepClonedObj = JSON.parse(JSON.stringify(obj));

deepClonedObj.firstname = "oscar"
console.log("deepClonedObj ", deepClonedObj)
console.log("obj ", obj)

/**
 * deepClonedObj  {
  firstname: 'oscar',
  lastname: 'doe',
  address: { street: 'Civil lines', house: '21-B' },
  age: 25
}
obj  {
  firstname: 'john',
  lastname: 'doe',
  address: { street: 'Civil lines', house: '21-B' },
  age: 25
}
 */