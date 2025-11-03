import React, {useRef} from 'react'
import TimerRef from './StopTimerRef';
// useRef
const App3 = () => {
    const inputRef = useRef(null);

    const handleInputFocus = () => {
        console.log(inputRef)
        console.log(inputRef.current)
        inputRef.current.focus()
    }

  return (
    <>
    <div>
        <input type='text' ref={inputRef} />
        <button onClick={handleInputFocus}>Focus Input</button>
    </div>
    <TimerRef />
    </>
  )
}

export default App3
