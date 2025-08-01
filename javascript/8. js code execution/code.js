let a = 10;
function fn(){
    
    console.log("i am fn");
    function inner(){
        console.log("i am inner function.")
    }
    
    inner();
}

fn();