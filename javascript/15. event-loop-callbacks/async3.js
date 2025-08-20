console.log("before");

const cb2 = () => {
    console.log("set timeout..")
console.log(new Date(), +new Date)

    while(true){

    }
}

const cb1 = () => console.log("hello");
console.log(new Date(), +new Date)
setTimeout(cb2, 1000);
setTimeout(cb1, 2000);

console.log("after")

/**
 * before
2025-08-20T02:22:52.520Z 1755656572520
after
set timeout..
2025-08-20T02:22:53.524Z 1755656573524
...while continues... hello never prints
 */