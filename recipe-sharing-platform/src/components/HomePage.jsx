import React, { useState, useEffect } from 'react';
import recipeData from '../data.json'; // التأكد من مسار الملف الصحيح

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setRecipes(recipeData);
      setLoading(false);
    } catch (e) {
      console.error("Failed to load recipe data:", e);
      setError("Failed to load recipes.");
      setLoading(false);
    }
  }, []); 

  // ... (كود التحميل والخطأ كما هو)
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        جاري تحميل الوصفات...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4 text-red-600 font-bold">
        خطأ: {error}
      </div>
    );
  }
  // ...

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 min-h-screen bg-gray-50">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-indigo-800">
        🍽️ قائمة الوصفات اللذيذة
      </h1>
      
      {/* شبكة استجابية: 1 عمود (افتراضي)، 2 عمود (متوسط)، 3 أعمدة (كبير) */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map(recipe => (
          <div 
            key={recipe.id}
            // التنسيقات الأساسية للبطاقة
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 
                       // تأثيرات التفاعل (Hover Effects)
                       transform transition duration-500 
                       hover:scale-[1.03] 
                       hover:shadow-2xl"
          >
            
            {/* الصورة */}
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-56 object-cover" // زيادة ارتفاع الصورة قليلاً
            />
            
            <div className="p-5">
              {/* العنوان */}
              <h2 className="text-2xl font-bold text-gray-900 mb-3 truncate">
                {recipe.title}
              </h2>
              
              {/* الملخص */}
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                {recipe.summary}
              </p>
              
              {/* زر الإجراء */}
              <button 
                className="w-full bg-indigo-600 text-white font-medium py-3 rounded-lg 
                           hover:bg-indigo-700 
                           focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-150"
              >
                اكتشف الوصفة
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;