let fruits = 'apple';
console.log(fruits);

{
    // console.log("line5", fruits);
    let fruits;
    console.log("line7", fruits);

    fruits = 'orange';
    console.log(fruits)
    {
        console.log(fruits)
        
    }
    console.log(fruits)
}

console.log(fruits);

// HOISTING + SHADOWING concepts