import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeFunctional from './Welcome'
import WelcomeClass from './WelcomeClass'
import Counter from './Counter'
import Todolist from './Todo'
import TodoFunctional from './TodoFunctional'

function App() {
  

  return (
    <>
    <WelcomeFunctional />
    <WelcomeClass name="Alice" />
    <Counter />
    {/* <Todolist /> */}
    <TodoFunctional />
    </>
  )
}

export default App
