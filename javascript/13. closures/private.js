function createEvenStack(){
    let items = [];
    return {
        push(item){
            if(item % 2 === 0){
                console.log("pushed in stack...")
                items.push(item)
            } else {
                console.log("Only even nos allowed.")

            }
        },
        pop(){
            return items.pop()
        }
    }
}

const stack = createEvenStack();
stack.push(10)
stack.push(5)
console.log(stack.items) // undefined. NOT EXPOSED.

// NOTE - when we declare variable inside a function scope, it is only accessible within function scope.