class Student {
    // class field "property"
    grade = "A";

    constructor(fname, lname){
        this.firstname = fname;
        this.lastname = lname;
    }

    // method
    getFullName(){
        return `${this.firstname} ${this.lastname}`
    }

    // static method
    static fromObject(obj){
        return new Student(obj.firstname, obj.lastname)
    }

}

const student = new Student("John", "Doe");
console.log(student.getFullName())
console.log(student.grade); // A
console.log(Student.fromObject({firstname: "jill", "lastname": "wilde"}))