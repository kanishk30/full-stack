let cap = {
    name: "Steve",
    team: "cap",
    petersTeamFn: function(mem1, mem2, mem3 = "loki", mem4 = "loki2"){
        console.log(`Hey ${this.name} am your neighborhood spiderman 
            and I belong to ${this.team}'s team with members ${mem1} and ${mem2} and ${mem3} and ${mem4}`);
    }
}
let ironMan = {
    name: "Tony", 
    team: "iron man"
}

Function.prototype.myBind = function(thisArg, ...args1) {
    let fn = this;
    thisArg.fn = fn;
    return function(...args){
        thisArg.fn(...args, ...args1) // way #1
        
        fn.call(thisArg, ...args, ...args1) // way #2
        fn.apply(thisArg, [...args, ...args1]) // way #3
    }

}


const bindPetersTeamFn = cap.petersTeamFn.myBind(ironMan, "helloworld", "helloworld2");
bindPetersTeamFn("hulk", "thor")