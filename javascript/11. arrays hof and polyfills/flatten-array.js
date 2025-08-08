// input  -> nested array
let input = [1, 2, 3,{}, [4, 5], [6, 7, 8, [9, 10, 11]]];
// output -> single level of array with num 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Methods already exists.
// console.log(input.flat(Infinity))
// console.log(input.flat(1))

// [1, 2, 3,{}, [4, 5], [6, 7, 8, [9, 10, 11]]];
function flatten(arr){
    let newArr = []

    for(let i = 0 ; i < arr.length; i++){
        const elem = arr[i]
        if(Array.isArray(elem)){
            // flatten it AGAIN!!!
            console.log("elem ", elem)
            let againFlattened = flatten(elem);
            console.log("againFlattened ", againFlattened)
            newArr.push(...againFlattened);
        } else {
            newArr.push(elem)
        }
    }
    return newArr;
}

let ans = flatten(input)
console.log(ans); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];