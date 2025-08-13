function outer() {
    let arrFn = [];
    let i = 0;
    for (i = 0; i < 3; i++) {
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