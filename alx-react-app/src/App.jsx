import WelcomeMessage from './components/WelcomeMessage.jsx';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import React from "react";
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <>
     <div className="App">
      <h1>User Profile Example</h1>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
    </div>
      <WelcomeMessage />  
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
