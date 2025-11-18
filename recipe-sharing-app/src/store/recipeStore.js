import {create} from 'zustand';

const generateId = () => String(Date.now());

export const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: '1',
      title: 'Spaghetti Bolognese',
      description: 'A classic pasta with meat sauce.',
      ingredients: ['spaghetti', 'minced beef', 'tomato sauce'],
      instructions: 'Cook pasta. Prepare sauce. Combine.',
    },
    {
      id: '2',
      title: 'Pancakes',
      description: 'Fluffy pancakes for breakfast.',
      ingredients: ['flour', 'milk', 'egg'],
      instructions: 'Mix ingredients. Fry on pan.',
    },
  ],
  addRecipe: (recipe) => {
    const newRecipe = {
      id: generateId(),
      title: recipe.title || 'Untitled',
      description: recipe.description || '',
      ingredients: recipe.ingredients || [],
      instructions: recipe.instructions || '',
    };
    set((state) => ({ recipes: [...state.recipes, newRecipe] }));
    return newRecipe.id;
  },
  updateRecipe: (id, updates) => {
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updates } : r)),
    }));
  },
  deleteRecipe: (id) => {
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) }));
  },
}));
