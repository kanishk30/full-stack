// example1
let cap = {
    firstName : "Steve",
    sayHi : function(){
        console.log("53", this.firstName);
        const iAmInner = function(){
            console.log("55",this.firstName);
        }
        
        iAmInner();
    }
}
cap.sayHi();

// 53 Steve
// 55 undefined

