let outerVar = 200;
function getFirstName(firstName){
    console.log("I have got your first name!");
    return function getLastName(lastName){
        console.log("I have got ur last name");
        return function greet(){
            console.log(`Hi, I am ${firstName} ${lastName}`); // closure
            console.log("outerVar", outerVar)
        }
    }
}

const firstNameFn = getFirstName("John");
console.log(1+1)
console.log("some other takss...")
const lastNameFn = firstNameFn("Doe");
lastNameFn();

// I have got your first name!
// I have got ur last name
// Hi, I am John Doe
// outerVar 200