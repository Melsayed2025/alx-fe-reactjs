import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (!recipes.length) return <div>No recipes yet.</div>;

  return (
    <ul className="space-y-3">
      {recipes.map((r) => (
        <li key={r.id} className="p-3 border rounded">
          <h3 className="text-lg font-semibold">{r.title}</h3>
          <p className="text-sm text-gray-600">{r.description}</p>
          <div className="mt-2">
            <Link to={`/recipes/${r.id}`} className="mr-2 underline">View</Link>
            <Link to={`/edit/${r.id}`} className="underline">Edit</Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
