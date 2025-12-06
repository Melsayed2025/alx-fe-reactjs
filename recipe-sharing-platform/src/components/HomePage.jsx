import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // تأكد من استيراد Link للتوجيه
import recipeData from '../data.json'; 

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // 🌟 حالة جديدة للبحث
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
  
  // 🌟 منطق التصفية: يتم تصفية الوصفات الأصلية عند تغير searchTerm 
  const filteredRecipes = recipes.filter(recipe => {
    // تحويل كل من العنوان والملخص وكلمة البحث إلى حروف صغيرة لضمان مطابقة غير حساسة لحالة الأحرف
    const lowerCaseSearch = searchTerm.toLowerCase();
    return (
      recipe.title.toLowerCase().includes(lowerCaseSearch) ||
      recipe.summary.toLowerCase().includes(lowerCaseSearch)
    );
  });
  
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
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-indigo-800">
        🍽️ قائمة الوصفات اللذيذة
      </h1>
      
      {/* 🌟 حقل البحث الجديد 🌟 */}
      <div className="mb-10 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="ابحث عن وصفة (مثل: كربونارا، دجاج، ماسالا...)"
          value={searchTerm}
          // تحديث حالة البحث عند كل ضغطة مفتاح
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 border-2 border-indigo-300 rounded-xl shadow-lg 
                     focus:outline-none focus:ring-4 focus:ring-indigo-200 transition"
        />
      </div>
      
      {/* رسالة في حالة عدم وجود نتائج */}
      {filteredRecipes.length === 0 && (
        <p className="text-center text-xl text-gray-500 mt-10">
          عذراً، لا توجد وصفات مطابقة لـ: **"{searchTerm}"**
        </p>
      )}

      {/* عرض قائمة الوصفات المفلترة */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRecipes.map(recipe => (
          <div 
            key={recipe.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 
                       transform transition duration-500 
                       hover:scale-[1.03] 
                       hover:shadow-2xl"
          >
            
            {/* الصورة */}
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-56 object-cover" 
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
              
              {/* زر الإجراء (يجب أن يكون Link للتوجيه إلى صفحة التفاصيل) */}
              <Link 
                to={`/recipe/${recipe.id}`} // استخدام مسار تفاصيل الوصفة
                className="w-full block text-center bg-indigo-600 text-white font-medium py-3 rounded-lg 
                           hover:bg-indigo-700 
                           focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-150"
              >
                اكتشف الوصفة
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;