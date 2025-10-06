import React, {useState, useEffect} from 'react'

const Counter = () => {


    let [count, setCount] = useState(0)

    useEffect(() => {
        // if empty array, then this useeffect will be called only once

        console.log("count changed");

        document.title = `You clicked ${count} times.`
    }, [count])

    useEffect(() => {
        console.log("component re-renders everytime")
    })

    useEffect(() => {
        console.log("initial render")
    }, [])

    function handleDecrement(){
        setCount(count-1)

        // count--;
    }
    
    const handleIncrement = () => {
        // count++;
        // console.log("before count : ", count)
        // setCount(count+1)
        
        setCount((c) => c+1)


        
        // console.log("after count : ", count); // still get stale value since state updates happen asynchronously / in batches.
    }

  return (
    <div>
      <button onClick={handleDecrement}> - </button>
      Count: {count}
      <button onClick={handleIncrement}> + </button>
    </div>
  )
}

export default Counter
