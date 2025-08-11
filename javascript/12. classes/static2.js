class MathUtils {
    static PI = 3.14;

    static square(x){
        return x*x
    }

    static cube(x){
        return x*x*x
    }
    
    calculateArea(dimension){
        return MathUtils.PI * MathUtils.square(dimension)
    }
}

console.log(MathUtils.PI)
console.log(MathUtils.square(5))
console.log(MathUtils.cube(5))

const util = new MathUtils();
console.log(util.calculateArea(2))