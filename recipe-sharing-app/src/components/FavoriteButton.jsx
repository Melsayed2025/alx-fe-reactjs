// src/components/FavoriteButton.jsx

import React from 'react';
import useRecipeStore from '../recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const [favorites, addFavorite, removeFavorite] = useRecipeStore(state => [
    state.favorites,
    state.addFavorite,
    state.removeFavorite
  ]);

  const isFavorite = favorites.includes(recipeId);

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        marginLeft: '10px',
        padding: '8px 12px',
        backgroundColor: isFavorite ? '#ffc107' : '#f8f9fa',
        color: isFavorite ? 'black' : '#333',
        border: '1px solid #ccc',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      {isFavorite ? '⭐️ مفضلة' : '☆ إضافة للمفضلة'}
    </button>
  );
};

export default FavoriteButton;
