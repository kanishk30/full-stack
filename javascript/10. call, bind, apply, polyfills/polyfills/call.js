let cap = {
    name: "Steve",
    team: "cap",
    petersTeamFn: function(mem1, mem2, mem3 = "loki"){
        console.log(`Hey ${this.name} am your neighborhood spiderman 
            and I belong to ${this.team}'s team with members ${mem1} and ${mem2} and ${mem3}`);
    }
}
let ironMan = {
    name: "Tony", 
    team: "iron man"
}


Function.prototype.myCall = function(objOnWhichFnWillBeInvoked, ...args) {
    // console.log("value of this -> ", this);
    // console.log("objOnWhichFnWillBeInvoked", objOnWhichFnWillBeInvoked)
    let reqdFn = this;

//     objOnWhichFnWillBeInvoked = {
//     name: "Tony", 
//     team: "iron man"
// }

    objOnWhichFnWillBeInvoked.reqdFn = reqdFn;

//         objOnWhichFnWillBeInvoked = {
//     name: "Tony", 
//     team: "iron man",
//     reqdFn: function(mem1, mem2){
//         console.log(`Hey ${this.name} am your neighborhood spiderman 
//             and I belong to ${this.team}'s team with members ${mem1} and ${mem2}`);
//     }
// }

    objOnWhichFnWillBeInvoked.reqdFn(...args)
}


cap.petersTeamFn.myCall(ironMan, "black widow", "thor")
cap.petersTeamFn.myCall(ironMan, "black widow", "thor", "hulk")