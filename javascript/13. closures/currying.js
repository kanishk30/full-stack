function counter(args){
    let count = 0;
    count++;
    if(args === 0){
        return count;
    } else {
        return function inner(args){
            count++;
            if(args == 0){
                return count;
            } else {
                return inner;
            }
        }
    }

}

console.log(counter(0)) // 1
console.log(counter()(0)) // 2
console.log(counter()()()()()(0)) // 6


// counter()(0)
// counter() > returns a function >> then only iadd (0)