import React from 'react'
import { useCallback } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

const StopWatch = React.memo(() => {
    const [time, setTime] = useState(35990);
    const timerRef = useRef(null);
    
    const handleStart = useCallback(() => {
       timerRef.current = setInterval(() => {
            setTime((prev) => prev+1)
        }, 1000)
    }, [])
    
    const handleStop = useCallback(() => {
        clearInterval(timerRef.current);
    }, [])

    const handleReset = useCallback(() => {
        clearInterval(timerRef.current);
        setTime(0)
    }, [])

    const formatDisplayTime = time => {
        const seconds = `0${time%60}`.slice(-2)
        const minutes = Math.floor(time / 60);
        const formattedMins = `0${minutes%60}`.slice(-2);
        const hours = Math.floor(time / 3600);
        const formattedHours = `0${hours}`.slice(-2);

        return `${formattedHours}:${formattedMins}:${seconds}`
    }


  return (
    <div>
      <h2>Stopwatch</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      <p>Timer: {formatDisplayTime(time)}</p>
    </div>
  )
});

export default StopWatch
