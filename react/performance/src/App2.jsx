import {  Suspense, lazy } from 'react'
 
import './App.css'
import {
Routes,
  Route,
  Link
} from "react-router-dom"; 

import Memo from './Memo';
import Callback from './Callback';

function App() {

  const HomePage = lazy(() => import('./HomePage'));
  const AboutPage = lazy(() => import('./AboutPage'));
  const CareersPage = lazy(() => import('./CareersPage'));
  return (
    <>
     <nav>
            <ul>
                <li>
                    <Link to={"/"} >Home</Link>
                </li>
                <li>
                    <Link to={"/about"} >About</Link>
                </li>
                <li>
                    <Link to={"/careers"} >Careers</Link>
                </li>
            </ul>
        </nav>
        <Memo />
        <Callback />
      <Suspense fallback={<div>Loading...</div>}>

           <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/careers"  element={<CareersPage />} />
            </Routes>
      </Suspense>
    </>
  )
}

export default App
