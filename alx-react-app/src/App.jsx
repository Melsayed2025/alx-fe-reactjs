import WelcomeMessage from './components/WelcomeMessage.jsx'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import MainContent from './MainContent.jsx'

function App() {
  const [count, setCount] = useState(0)

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
