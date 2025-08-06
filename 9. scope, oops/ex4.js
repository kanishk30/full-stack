var firstName = "Loki"
let cap = {
    firstName : "Steve",
    sayHi : function(){
        console.log("53", this.firstName);
        const subInner = () => {
            console.log("54", this.firstName);
            const iAmInner = ()=> {
                console.log("55", this.firstName);
            }
            iAmInner();
        }
        subInner();
    }
}
cap.sayHi();

// 53 Steve
// ex4.js:7 54 Steve
// ex4.js:9 55 Steve