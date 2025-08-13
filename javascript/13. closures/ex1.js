var a = 10;
function b(){
    console.log("in b func = ", a)
}

function fn(){
    var a = 20;
    b();
    console.log("in fn func = ", a)
}
fn();

/**
 * in b func =  10
     in fn func =  20
 */