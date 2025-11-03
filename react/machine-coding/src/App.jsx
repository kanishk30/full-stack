import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StopWatch from './StopWatch'
import ImageCarousel from './ImageCarousel'
import Modal from './Modal'
import useVisibility from './hooks/useVisibility'

function App() {

  const {
        toggle,
        show,
        hide,
        isVisible
    } = useVisibility(false)

  return (
  <>
    {/* <StopWatch /> */}
    {/* <ImageCarousel /> */}
    <h2>Custom hook example</h2>
    <button onClick={show}>Show modal</button>
    <button onClick={toggle}>Toggle modal</button>
    <Modal hide={hide} isVisible={isVisible} />
  </>
  )
}

export default App
