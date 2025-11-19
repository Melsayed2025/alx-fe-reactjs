// src/components/FavoritesList.jsx

import React from 'react';
import useRecipeStore from '../recipeStore';

const FavoritesList = () => {
  // استخلاص الوصفات المفضلة باستخدام IDs
  const favoriteRecipes = useRecipeStore(state => 
    state.favorites.map(id => state.recipes.find(recipe => recipe.id === id))
  ).filter(recipe => recipe); // تصفية أي نتائج غير موجودة (undefined)

  if (favoriteRecipes.length === 0) {
    return <p style={{ color: '#6c757d' }}>لا توجد وصفات في المفضلة بعد.</p>;
  }

  return (
    <div style={{ border: '1px solid #dc3545', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
      <h3>❤️ وصفاتي المفضلة</h3>
      {favoriteRecipes.map(recipe => (
        <div key={recipe.id} style={{ borderBottom: '1px dotted #dc3545', padding: '8px 0' }}>
          <strong>{recipe.title}</strong>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
