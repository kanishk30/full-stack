// HW TODO - using "var" only, output should be 0,1,2

function outer() {
    let arrFn = [];
    for (var i = 0; i < 3; i++) {
        arrFn.push(function fn() {
            console.log(i);
        })
    }
    return arrFn;
}
let arrFn = outer();
arrFn[0](); // 3
arrFn[1](); // 3
arrFn[2](); // 3