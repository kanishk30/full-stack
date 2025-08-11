// parent
class Vehicle {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
        this.running = false;
    }
    start(){
        this.running = true;
        return `${this.brand} ${this.model} started...`
    }
    stop(){
        this.running = false;
        return `${this.brand} ${this.model} stopped...`
    }
    getInfo(){
        return `${this.brand} ${this.model}`
    }
}
class Car extends Vehicle {
    constructor(brand, model, numDoors){
        super(brand, model); // invokes parent's constrcutor.
        this.numDoors = numDoors
    }

    // override parent's method.
    getInfo(){
        return `${super.getInfo()}, ${this.numDoors} doors`;
    }

    // add a new method to Car class. ( not present in Vehicle class )

    honk(){
        return "Beep"
    }
}

const myCar = new Car("Kia", "Sonet", 4);
console.log(myCar.start())
console.log(myCar.stop())
console.log(myCar.getInfo())
console.log(myCar.honk())