import  {Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './Hello'
import DisplayData from "./DisplayData"
import Welcome from './Welcome'
import Button from './Button'

import Counter from './Counter'
import {SimpleForm, ComplexForm} from './Form'

import FetchData from './FetchData'

import TemperatureInput from './TemperatureInput'
import TemperatureDisplay from './TemperatureDisplay'

function App() {
  // const fruits = ['apple', 'banana'];
  const fruits = [];
  const person = {
    name: "Alice",
    age: 25
  }

    const [temperature, setTemperature] = useState("")

    const handleTemperature = e => {
        setTemperature(e.target.value)
    }


    const [count, setCount] = useState(0)

    function handleIncr(){
      setCount(count+1)
    }
    
    function handleDecr(){
      setCount(count-1)
    }

  return (
    <Fragment>
      {/* <h1>Vite + React!!!!!!!</h1>
      <MyComponent name="kanishk" job="SDE" />
      <MyComponent name='Jill' job="Teacher" />
      <MyComponent /> */}
 
    {/* <DisplayData fruits={fruits} person={person} /> */}
    {/* <Welcome name="Oscar"/>
    <Welcome />
    <Button /> */}

    {/* <h2>useState example</h2>
    <Counter />

    <SimpleForm />

    <ComplexForm/> */}

    {/* <FetchData /> */}

    {/* <h3>Lifting state up</h3>

    <TemperatureInput temperature={temperature} handleTemperature={handleTemperature} />
    <TemperatureDisplay temperature={temperature} />
     */}

hello

<h3>Intuition for redux</h3>

<div>
  <button onClick={handleDecr}> - </button>
  <span>{count}</span>
  <button onClick={handleIncr}> + </button>
</div>

     </Fragment>
  )
}

export default App
