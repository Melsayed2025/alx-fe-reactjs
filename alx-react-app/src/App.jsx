import WelcomeMessage from './components/WelcomeMessage.jsx'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import MainContent from './MainContent.jsx'

function App() {
  

  return (
    <>
    <WelcomeMessage />
   <Header />
    <MainContent />
    <Footer />
    
    </>
  )
}

export default App
