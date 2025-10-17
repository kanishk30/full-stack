import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter/Counter'
import CounterRedux from './components/counter/CounterRedux'

function App() {
  return (
    <>
      <Counter />
      <CounterRedux />
    </>
  )
}

export default App
