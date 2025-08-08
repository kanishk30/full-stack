function fn(param){
    console.log("param received - ", param);
    if(typeof param === 'function'){
        param()
    }

}

function smallerFn(){
    console.log("smaller fn executed...")
}

function hof(cb){
    console.log("inside hof");
    cb()
}
hof(smallerFn);
// inside hof
// smaller fn executed...