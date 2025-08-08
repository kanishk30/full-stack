function fn(){
    console.log("fn is called")
    fn.count++;
}

fn.count = 0;

fn()
fn()
fn()

fn.showCount = function(){
    console.log("count is ", this.count)
}
console.log("fn ", fn)
fn.showCount()