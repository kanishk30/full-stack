import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter/Counter'
import CounterRedux from './components/counter/CounterRedux'
import TodoRedux from './components/todo/TodoRedux'

import User from './components/user/User'
import UserRedux from './components/user/UserRedux'

function App() {
  return (
    <>
      <Counter />
      <CounterRedux />
      <TodoRedux />
      <User />
      <UserRedux />
    </>
  )
}

export default App
