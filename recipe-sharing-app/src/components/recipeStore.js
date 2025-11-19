// src/components/recipeStore.js (أو src/recipeStore.js)

import { create } from 'zustand';

// بيانات وهمية للبدء، إذا كانت الوصفات فارغة
const initialRecipes = [
  { id: 1, title: "سلطة يونانية", description: "وصفة خفيفة وصحية.", ingredients: "طماطم، خيار، زيتون", cookingTime: 15 },
  { id: 2, title: "معكرونة بالبشاميل", description: "طبق رئيسي شهي.", ingredients: "مكرونة، لحم مفروم، حليب", cookingTime: 60 },
  { id: 3, title: "كيكة الشوكولاتة", description: "حلوى غنية ولذيذة.", ingredients: "شوكولاتة، دقيق، بيض", cookingTime: 45 },
];

const useRecipeStore = create((set, get) => ({
  // ------------------------------------
  // حالة إدارة الوصفات الأساسية
  recipes: initialRecipes,
  favorites: [], // مهمة 3: قائمة المفضلة (تحتفظ بالـ IDs)
  nextId: initialRecipes.length + 1,
  // ------------------------------------

  // مهمة 2: حالة البحث والفلترة
  searchTerm: '',
  filteredRecipes: initialRecipes,
  // ------------------------------------

  // أكشنز (Actions)
  
  // أكشنز CRUD (من المهام السابقة)
  addRecipe: (recipe) => set(state => ({
    recipes: [...state.recipes, { ...recipe, id: state.nextId }],
    nextId: state.nextId + 1,
  })),
  updateRecipe: ({ id, title, description }) => set(state => ({
    recipes: state.recipes.map(r => r.id === id ? { ...r, title, description } : r)
  })),
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(r => r.id !== id),
    favorites: state.favorites.filter(favId => favId !== id), // حذف من المفضلة أيضاً
  })),

  // ====================================
  // مهمة 2: أكشنز البحث والفلترة

  // تحديث مصطلح البحث
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    // يتم استدعاء filterRecipes مباشرة بعد تحديث searchTerm لضمان التحديث الفوري
    get().filterRecipes();
  },

  // تطبيق الفلترة (يعتمد على Title حالياً)
  filterRecipes: () => set(state => {
    const term = state.searchTerm.toLowerCase();
    const results = state.recipes.filter(recipe =>
      // يمكن إضافة criteria أخرى مثل (recipe.ingredients.toLowerCase().includes(term))
      recipe.title.toLowerCase().includes(term)
    );
    return { filteredRecipes: results };
  }),

  // ====================================
  // مهمة 3: أكشنز المفضلة والتوصيات

  // إضافة وصفة إلى المفضلة
  addFavorite: (recipeId) => set(state => {
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
    return state; // لا تفعل شيئًا إذا كانت موجودة بالفعل
  }),

  // إزالة وصفة من المفضلة
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  // توليد التوصيات (Mock Implementation)
  recommendations: [],
  generateRecommendations: () => set(state => {
    // مثال: توصيات عشوائية من قائمة الوصفات باستثناء المفضلة
    const nonFavoriteRecipes = state.recipes.filter(recipe => !state.favorites.includes(recipe.id));
    
    // اختيار عشوائي لعدد قليل من غير المفضلة
    const shuffled = [...nonFavoriteRecipes].sort(() => 0.5 - Math.random());
    const recommended = shuffled.slice(0, 2); // نختار 2 فقط
    
    return { recommendations: recommended };
  }),

}));

export default useRecipeStore;
