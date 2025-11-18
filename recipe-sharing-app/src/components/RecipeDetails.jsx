import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === id));
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <p className="my-2 text-gray-700">{recipe.description}</p>

      <section className="my-4">
        <h2 className="font-semibold">Ingredients</h2>
        <ul className="list-disc ml-6">
          {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
        </ul>
      </section>

      <section className="my-4">
        <h2 className="font-semibold">Instructions</h2>
        <p>{recipe.instructions}</p>
      </section>

      <div className="mt-4 space-x-2">
        <Link to={`/edit/${recipe.id}`} className="px-3 py-2 bg-yellow-400 rounded">Edit</Link>
        <DeleteRecipeButton recipeId={recipe.id} />
        <button onClick={() => navigate(-1)} className="px-3 py-2 border rounded">Back</button>
      </div>
    </div>
  );
};

export default RecipeDetails;
