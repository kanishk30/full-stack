function modify(a,b){
    console.log("1",a,b)
    a = 10;
    b = 20;
    console.log("2",a,b)
}

let p = [1,2,3];
let q = [4,5,6];

console.log("3", p,q)

modify(p,q);

console.log("4", p,q)

/**
 * 3 [1,2,3] [4,5,6]
 * 1 [1,2,3] [4,5,6]
 * 2 10 20
 * 4 [ 1, 2, 3 ] [ 4, 5, 6 ]
 */