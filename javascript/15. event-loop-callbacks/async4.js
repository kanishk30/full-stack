console.log("code starts", new Date())
console.log("before")

const cb2 = () => {
    console.log("set timeout...");
    const timeAfterFiveSec = Date.now() + 5000;
    while(Date.now() < timeAfterFiveSec) {
        //
    }
}

const cb1 = () => {
    console.log("hello");
    console.log("hello prints", new Date())
};

setTimeout(cb2, 1000);
setTimeout(cb1, 2000);

console.log("after")

/**
     * code starts 2025-08-20T02:37:37.361Z
    before
    after
    set timeout...
    hello
    hello prints 2025-08-20T02:37:43.375Z
 */