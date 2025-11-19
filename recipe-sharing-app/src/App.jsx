// src/App.jsx

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

// مكونات المهام 2 و 3
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';


const App = () => {
  return (
    <Router>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', backgroundColor: '#f4f4f4' }}>
        <header style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>
          <h1 style={{ color: '#333' }}>تطبيق مشاركة الوصفات</h1>
          <nav>
            <Link to="/" style={{ marginRight: '15px', textDecoration: 'none', color: '#007bff' }}>الرئيسية</Link>
            <Link to="/add" style={{ textDecoration: 'none', color: '#28a745' }}>إضافة وصفة</Link>
          </nav>
        </header>

        {/* ------------------------------------- */}
        {/* منطقة البحث والمفضلة (المهام 2 و 3) */}
        <SearchBar />
        <FavoritesList />
        <RecommendationsList />
        {/* ------------------------------------- */}
        
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
