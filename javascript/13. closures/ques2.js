function outer() {
    let arrFn = [];
    for (var i = 0; i < 3; i++) {
        arrFn.push(function fn() {
            i++;
            console.log(i);
        })
    }
    return arrFn;
}
let arrFn = outer();
arrFn[0](); // 4
arrFn[1](); // 5
arrFn[2](); // 6