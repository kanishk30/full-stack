import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
Routes,
  Route,
  Link
} from "react-router-dom"; 

// import HomePage from './HomePage'
// import AboutPage from './AboutPage'
// import CareersPage from './CareersPage'
import Navbar from './Navbar';

function App() {

  const [HomePage, setHomePage] = useState(null);
  const [AboutPage, setAboutPage] = useState(null);
  const [CareersPage, setCareersPage] = useState(null);

  useEffect(() => {
    import('./HomePage').then((module) => setHomePage(() => module.default))
  }, [])


  const loadHomePage = () => {
        import('./HomePage').then((module) => setHomePage(() => module.default))

  }
  
  const loadCareersPage = () => {
        import('./CareersPage').then((module) => setCareersPage(() => module.default))
  }
  const loadAboutPage = () => {
        import('./AboutPage').then((module) => setAboutPage(() => module.default))
  }



  return (
    <>
     <nav>
            <ul>
                <li>
                    <Link to={"/"} onClick={loadHomePage}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"} onClick={loadAboutPage}>About</Link>
                </li>
                <li>
                    <Link to={"/careers"} onClick={loadCareersPage}>Careers</Link>
                </li>
            </ul>
        </nav>
      
           <Routes>
              <Route path="/" element={HomePage ? <HomePage /> : <div>Loading...</div>} />
              <Route path="/about" element={AboutPage ? <AboutPage /> : <div>Loading...</div>} />
              <Route path="/careers"  element={CareersPage ? <CareersPage /> : <div>Loading...</div>} />
            </Routes>
    </>
  )
}

export default App
