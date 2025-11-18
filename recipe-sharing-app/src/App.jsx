import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddRecipeForm from './Components/AddRecipeForm.jsx'
import RecipeList from './Components/RecipeList.jsx'
function App() {
  

  return (
    <>
    
    <AddRecipeForm />
    <RecipeList />
    
    </>
    
  )
}

export default App
