import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this recipe?');
    if (!confirmed) return;
    deleteRecipe(recipeId);
    navigate('/');
  };

  return (
    <button onClick={handleDelete} className="px-3 py-2 bg-red-600 text-white rounded">
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
