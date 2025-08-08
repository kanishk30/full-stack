let obj = {
    firstname: "john",
    lastname: "doe",
    address: {
        street: "Civil lines",
        house: "21-B"
    },
    age: 25
};

let obj2 = {
    school: "DPS"
}

let copiedObj = Object.assign(obj2, obj);

copiedObj.lastname = "carrey"
copiedObj.address.street = "Indraprastha";

console.log("copiedObj", copiedObj);
/**
 * SHALLOW COPY
 * {
  firstname: 'john',
  lastname: 'doe',
  address: { street: 'Indraprastha', house: '21-B' },
  age: 25
}
 */