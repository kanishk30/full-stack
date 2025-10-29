import React from 'react'

const Counter = () => {
    const [counter, setCounter] =React.useState(0);

    const handleIncrement = () => {
        setCounter(c => c+1)
    }
    const handleDecrement = () => {
        setCounter(c => c-1)
    }
  return (
    <div>
      <h2>Counter</h2>
      <button onClick={handleDecrement}>Decrement</button>
      <h4>Count is {counter}</h4>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Counter
