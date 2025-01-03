
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './Components/PageNotFound/PageNotFound'
import { Navbar } from './Components/Navbar/Navbar'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
 
    AOS.init({
    
      once: false,
      mirror: false,
     
      duration: 1000,
     
      
    });
  AOS.refresh()
 useEffect(() => {
     // Reinitialize AOS whenever the page content changes (e.g., after dynamic updates)
     AOS.refresh();
   }, []);

  // my all the routes
  const routes = [
    {
      path: "/",
      Element:<Navbar/>
    },
   
    {
      path: "*",
      Element:<PageNotFound/>
    }
  ]

  return (
    <div className='myapp'>
      <BrowserRouter>
        <Routes>
          {routes.map((route)=>(<Route key={route.path} path={route.path} element={route.Element} />))}
        </Routes>
      </BrowserRouter>
    

    </div>
  )
}

export default App
