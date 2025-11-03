import React, {useState, useEffect, useRef} from 'react'

const TimerRef = () => {
    const [seconds, setSeconds] = useState(0)

    const intervalRef = useRef(null);

    useEffect(() => {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev+1)
      }, 1000)
    }, [])

    const handleStop = () => {
      clearInterval(intervalRef.current)
    }

  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button onClick={() => handleStop()}>
        Stop Timer
      </button>
    </div>
  )
}

export default TimerRef
