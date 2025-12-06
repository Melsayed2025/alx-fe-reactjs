import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // للاستفادة من ID من مسار URL
import recipeData from '../data.json'; 

const RecipeDetail = () => {
  // استخدام useParams لجلب المعرف (ID) من مسار URL (مثلاً: /recipe/1)
  const { id } = useParams(); 
  
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // 1. البحث في البيانات الوهمية عن الوصفة المطابقة
    // يجب تحويل ID من السلسلة النصية إلى رقم للمقارنة
    const foundRecipe = recipeData.find(r => r.id === parseInt(id));

    if (foundRecipe) {
      setRecipe(foundRecipe);
    } else {
      setRecipe(null); // لا توجد وصفة مطابقة
    }
    setLoading(false);
  }, [id]); // إعادة التشغيل إذا تغير المعرف في مسار URL

  if (loading) {
    return (
      <div className="text-center mt-10 text-xl font-semibold">
        جاري تحميل تفاصيل الوصفة...
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="text-center mt-10 p-5 text-red-600 font-bold">
        عذراً، لم يتم العثور على الوصفة المطلوبة.
      </div>
    );
  }

  // 🌟 عرض التفاصيل 🌟
  return (
    <div className="container mx-auto p-4 md:p-10 min-h-screen bg-gray-50">
      
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-6 lg:p-10">
        
        {/* العنوان والصورة */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-800 mb-6 text-center">
          {recipe.title}
        </h1>
        
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-96 object-cover rounded-lg mb-8 shadow-lg"
        />
        
        <p className="text-xl text-center text-gray-700 mb-10 italic border-b pb-4">
          {recipe.summary}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* عمود المكونات */}
          <div className="lg:col-span-1 bg-indigo-50 p-6 rounded-xl shadow-inner h-fit">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4 border-b-2 border-indigo-200 pb-2">
              📋 المكونات
            </h2>
            <ul className="space-y-3 text-lg text-gray-800 list-none p-0">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-indigo-600 mr-3">•</span> 
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          
          {/* عمود التعليمات */}
          <div className="lg:col-span-2 p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
              👨‍🍳 طريقة التحضير
            </h2>
            <ol className="space-y-5 text-lg text-gray-700">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex">
                  <span className="font-semibold text-2xl text-indigo-600 mr-3">
                    {index + 1}.
                  </span>
                  <p>{instruction}</p>
                </li>
              ))}
            </ol>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default RecipeDetail;