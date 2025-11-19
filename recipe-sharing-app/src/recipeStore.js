// src/recipeStore.js (تحديث)

import create from 'zustand';

const generateId = () => Date.now();

const useRecipeStore = create(set => ({
  recipes: [
    { id: 101, title: 'سلطة الفواكه المنعشة', description: 'مزيج لذيذ من الفواكه الموسمية مع قليل من العسل.' },
    { id: 102, title: 'شوربة العدس الحارة', description: 'عدس أحمر، كمون، جزر، وبصل، تقدم ساخنة.' },
  ],
  
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, { ...newRecipe, id: generateId() }]
  })),

  // العمل الجديد: حذف الوصفة
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),

  // العمل الجديد: تحديث الوصفة
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id 
        ? { ...recipe, ...updatedRecipe } // دمج البيانات الجديدة
        : recipe
    )
  })),
  
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;