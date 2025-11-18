import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './Components/RecipeList';
import AddRecipeForm from './Components/AddRecipeForm';
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";



const App = () => {
  return (
    <Router>
      <div className="container p-4">
        <header className="mb-4">
          <h1 className="text-2xl font-bold">Recipe Sharing App</h1>
          <nav className="mt-2">
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/add">Add Recipe</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/edit/:id" element={<EditRecipeForm />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
