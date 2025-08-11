class Rectangle {
    constructor(height, width){
        this.width = width;
        this.height = height;
    }

    // instance method
    calculateArea(){
        return this.width * this.height;
    }

    scaleDimensions(factor){
        this.height = this.height*factor;
        this.width = this.width*factor;
    }

}

const rect = new Rectangle(10,5);
console.log(rect.calculateArea())
rect.scaleDimensions(2);
console.log(rect.calculateArea());




class DataProcessor {
    // regular method
    process(data){
        // ....
        return data.map(e => e*2)
    }

    // async method
    async fetchData(url){
        const res = await fetch(url);
        return res.json()
    }

    // generator method
    *generateSequence(start, end){
        for(let i = start;  i < end; i++){
            yield i;
        }
    }
}

const dp = new DataProcessor();
console.log(dp.process([1,2,3]))