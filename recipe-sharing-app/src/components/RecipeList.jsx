// src/components/RecipeList.jsx

import React from 'react';
import useRecipeStore from '../recipeStore';
// ✅ إضافة المكون <Link>
import { Link } from 'react-router-dom'; 
import FavoriteButton from './FavoriteButton'; 
// ❌ إزالة useNavigate إذا لم تكن مطلوبة في مكان آخر

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  // ❌ إزالة const navigate = useNavigate();

  if (filteredRecipes.length === 0) {
    return <p>لا توجد وصفات مطابقة لنتائج البحث.</p>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>قائمة الوصفات</h2>
      {filteredRecipes.map(recipe => (
        <div 
          key={recipe.id} 
          style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          
          {/* ✅ استخدام <Link> للتنقل إلى صفحة التفاصيل */}
          <Link 
            to={`/recipes/${recipe.id}`} // المسار المطلوب
            style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}
          >
            <h4>{recipe.title}</h4>
            <p style={{ margin: 0 }}>{recipe.description.substring(0, 50)}...</p>
          </Link>
          
          {/* زر المفضلة */}
          <FavoriteButton recipeId={recipe.id} /> 
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
