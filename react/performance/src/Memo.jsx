import React, {useMemo, useState} from 'react'

   const generateLargeArray = () => {
        const arr = [];
        for(let i = 0 ; i < 1000000; i++){
            arr.push(i);
        }
        console.log("generateLargeArray called")
        return arr;
    }

    const sumArray = arr => {
        console.log("sumArray called")

        const sum = arr.reduce((acc, curr) => acc+curr, 0);
        return sum;
    }

const Memo = () => {
    const [count, setCount] = useState(0);

    const largeArr = useMemo(() => generateLargeArray(), []) ;
    const sum = useMemo(() => sumArray(largeArr), [largeArr]);
 
    return (
        <div>
            <h3>Sum: {sum}</h3>
            <button onClick={() => setCount(c =>c+1)}>Increment</button>
            <p>Count: {count}</p>
        </div>
    )
}

export default Memo
