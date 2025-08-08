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

// cap.petersTeamFn.apply(ironMan, ["black widow", "thor"])

Function.prototype.myApply = function(thisArg, argsArray) {
    let actualFnOnWhichItIsCalled = this;
    thisArg.fn = actualFnOnWhichItIsCalled;
    thisArg.fn(...argsArray)
}

cap.petersTeamFn.myApply(ironMan, ["black widow", "thor", "hulk"])

