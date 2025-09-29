import React from 'react'

const Button = () => {
    function handleClick() {
        console.log("Clicked!")
    }
  return (
    <button onClick={handleClick}>Click Me!</button>
  )
}

export default Button
