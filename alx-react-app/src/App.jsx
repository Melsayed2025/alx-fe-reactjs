import WelcomeMessage from './components/WelcomeMessage.jsx';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
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
