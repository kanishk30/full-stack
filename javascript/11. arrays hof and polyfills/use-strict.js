// x = 5 ; // no error if u run the file


// "use strict";
// x = 5; // ReferenceError: x is not defined

// function test(){
//     console.log(this); // global or window
// }

// test()

"use strict";

function test(){
    console.log(this); // undefined
}

test()