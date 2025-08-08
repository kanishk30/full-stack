function fn(p1, ...p2){
    console.log("params are ", p1)
    console.log("rest params are ", p2)
    console.log("first rest param is ", p2[0])
}

fn("hi", "hello")
fn("hi", "hello", "hru", "wassup", 'ddd', 'djhhjdhjd')

/**
 * params are  hi
rest params are  [ 'hello' ]
first rest param is  hello
params are  hi
rest params are  [ 'hello', 'hru', 'wassup', 'ddd', 'djhhjdhjd' ]
first rest param is  hello
 */