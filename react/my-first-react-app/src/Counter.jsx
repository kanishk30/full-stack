import React, {useState} from 'react'

const Counter = () => {


    let [count, setCount] = useState(0)

    function handleDecrement(){
        setCount(count-1)

        // count--;
    }
    
    const handleIncrement = () => {
        // count++;
        console.log("before count : ", count)
        // setCount(count+1)
        
        setCount((c) => c+1)


        
        console.log("after count : ", count); // still get stale value since state updates happen asynchronously / in batches.
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
