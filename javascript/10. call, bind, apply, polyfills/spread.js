// let arr1 = [1,2,3,4,5];
// let arr2 = arr1;
// let arr3 = [...arr1];


// arr2.pop()
// arr2.push(6);

// arr2[2] = 100;

// console.log(arr2); // [ 1, 2, 100, 4, 6 ]

// console.log(arr1)


// console.log(arr3);


// spread only changes memeory reference at first level.

let arr4 = [10,20,30, [40,50], 60, 70];
let arr5 = [...arr4];

arr5.pop(); // arr5 = [10,20,30, [40,50], 60]
arr5.push(1000) // arr5 = [10,20,30, [40,50], 60, 1000] ; 
                // arr4 = [10,20,30, [40,50], 60, 70];

arr5[3][0] = 4000; // arr5 = [10,20,30, [4000,50], 60, 1000] ;

console.log(arr4) // arr4 = [10,20,30, [4000,50], 60, 70];
console.log(arr5) // arr5 = [10,20,30, [4000,50], 60, 1000] ;