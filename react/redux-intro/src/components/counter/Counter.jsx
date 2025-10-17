import { useState } from 'react'


function Counter() {
  
      const [count, setCount] = useState(0)
  
      function handleIncr(){
        setCount(count+1)
      }
      
      function handleDecr(){
        setCount(count-1)
      }

  return (
    <>
      <h3>Counter example</h3>
      <div>
        <button onClick={handleDecr}> - </button>
        <span>{count}</span>
        <button onClick={handleIncr}> + </button>
    </div>
    </>
  )
}

export default Counter
