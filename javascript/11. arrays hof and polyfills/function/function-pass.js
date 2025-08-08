function fn(param){
    console.log("param received - ", param);
    if(typeof param === 'function'){
        param()
    }

}

function smallerFn(){
    console.log("smaller fn executed...")
}

fn({name: "john"})
fn(smallerFn)
/**
 * param received -  { name: 'john' }
param received -  [Function: smallerFn]
smaller fn executed...
 */