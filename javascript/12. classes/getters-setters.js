class Name {

    constructor(fname, lname){
        this.firstname = fname;
        this.lastname = lname;
    }

    // getter
    get fullName(){
        return `${this.firstname} ${this.lastname}`
    }

    // setter
    set fullName(value){
        if(typeof value !== "string"){
            throw new Error("first name should be a string")
        }
        // set he value.
        const parts = value.split(" ");
        this.firstname = parts[0];
        this.lastname = parts[1];
    }
}

const student = new Name("john", "doe")
console.log(student.fullName)

// John Doe