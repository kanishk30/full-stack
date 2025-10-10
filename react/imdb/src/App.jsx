import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar'
import WatchList from './components/WatchList'
import Home from './components/Home'


function App() {

  return (
    <>
        <Navbar />


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/watchlist' element={<WatchList />} />
        </Routes>
    </>
  )
}

export default App
