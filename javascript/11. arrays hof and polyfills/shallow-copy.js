let arr = [1,2,3,4,5, [6, 7,8], 9];

let copyArr = [...arr];

arr[0] = 100;
arr[5][0] = 600;

console.log("arr", arr); // arr [ 100, 2, 3, 4, 5, [ 600, 7, 8 ], 9 ]
console.log("copyArr", copyArr); // copyArr [ 1, 2, 3, 4, 5, [ 600, 7, 8 ], 9 ]

// spread operator in obj;

let obj = {
    name: "john",
    address: {
        street: "Civil lines",
        house: "21-B"
    },
    age: 25
};

let clonedObj = {...obj}; // shallow copied

obj.name = "jill";

obj.address.street = "Rajendra nagar"

console.log("obj", obj)
console.log("clonedObj", clonedObj)
/**
 * obj {
  name: 'jill',
  address: { street: 'Rajendra nagar', house: '21-B' },
  age: 25
}
clonedObj {
  name: 'john',
  address: { street: 'Rajendra nagar', house: '21-B' },
  age: 25
}
 */
