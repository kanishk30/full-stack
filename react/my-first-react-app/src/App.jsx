import  {Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './Hello'
import DisplayData from "./DisplayData"
import Welcome from './Welcome'
import Button from './Button'

import Counter from './Counter'
import {SimpleForm, ComplexForm} from './Form'

function App() {
  // const fruits = ['apple', 'banana'];
  const fruits = [];
  const person = {
    name: "Alice",
    age: 25
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

    <h2>useState example</h2>
    <Counter />

    <SimpleForm />

    <ComplexForm/>
    </Fragment>
  )
}

export default App
