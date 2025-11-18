import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === id));
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title || '');
      setDescription(recipe.description || '');
      setIngredients((recipe.ingredients || []).join(', '));
      setInstructions(recipe.instructions || '');
    }
  }, [recipe]);

  if (!recipe) return <div>Recipe not found.</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(id, {
      title,
      description,
      ingredients: ingredients ? ingredients.split(',').map(i => i.trim()) : [],
      instructions,
    });
    navigate(`/recipes/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-lg">
      <div>
        <label>Title</label>
        <input value={title} onChange={e => setTitle(e.target.value)} className="w-full" />
      </div>

      <div>
        <label>Description</label>
        <input value={description} onChange={e => setDescription(e.target.value)} className="w-full" />
      </div>

      <div>
        <label>Ingredients (comma separated)</label>
        <input value={ingredients} onChange={e => setIngredients(e.target.value)} className="w-full" />
      </div>

      <div>
        <label>Instructions</label>
        <textarea value={instructions} onChange={e => setInstructions(e.target.value)} className="w-full" />
      </div>

      <div className="space-x-2">
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
        <button type="button" onClick={() => navigate(-1)} className="px-4 py-2 border rounded">Cancel</button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
