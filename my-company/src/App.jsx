import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Navbar from './components/Navbar'

function App() {
  

  return(
    
     <BrowserRouter>
      <Navbar/>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/services' element={<Services/>}/>
<Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
      
   
  );
}

export default App
