import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeFunctional from './Welcome'
import WelcomeClass from './WelcomeClass'
import Counter from './Counter'
import Todolist from './Todo'
import TodoFunctional from './TodoFunctional'
import withLoading from './hoc/Loading'
import Data from './Data'


const EnhancedDataComponent = withLoading(Data)
const EnhancedCiunterComponent = withLoading(Counter)

function App() {
  

  return (
    <>
    {/* <WelcomeFunctional />
    <WelcomeClass name="Alice" />
    <Counter /> */}
    {/* <Todolist /> */}
    {/* <TodoFunctional /> */}
    <EnhancedDataComponent data="some data... " />
    <EnhancedCiunterComponent />
    </>
  )
}

export default App
