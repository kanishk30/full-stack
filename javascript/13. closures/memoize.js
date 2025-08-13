function calculate(n){
    let sum = 0;
    console.log("calc called")
    for (let i = 0 ; i < n; i++){
        sum = sum + n;
    }
    return sum;
}

// console.log(calculate(5))
// console.log(calculate(5))
// console.log(calculate(5))
// console.log(calculate(5))


function memoize(fn){
    let cache = {};
    return function(n){
        let isIsInputPresent = cache[n] !== undefined;
        if(isIsInputPresent){
            return cache[n]
        } else {
            const result = fn(n);
            cache[n] = result;
            return result;
        }

    }
}

const efficientCalc = memoize(calculate);
console.time()
console.log(efficientCalc(5))
console.timeEnd()
console.time()

console.log(efficientCalc(5))
console.timeEnd()

console.time()
console.log(efficientCalc(5))
console.timeEnd()

console.time()
console.log(efficientCalc(5))
console.timeEnd()

/**
 * calc called
25
default: 4.329ms
25
default: 0.08ms
25
default: 0.022ms
25
default: 0.094ms
 */
