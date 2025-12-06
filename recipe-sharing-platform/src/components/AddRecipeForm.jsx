import React, { useState } from 'react';

const AddRecipeForm = ({ onAddRecipe }) => { 
  // تم تغيير 'instructions' إلى 'steps'
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '', 
    steps: '', // 🌟 تم التغيير
    image: '', 
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value; // استخدام صريح لـ e.target.value
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.title.trim()) {
      newErrors.title = 'يُرجى إدخال عنوان الوصفة.';
      isValid = false;
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'يُرجى إدخال المكونات.';
      isValid = false;
    } else {
      const ingredientLines = formData.ingredients.trim().split('\n').filter(line => line.trim() !== '');
      if (ingredientLines.length < 2) {
        newErrors.ingredients = 'يجب أن تتضمن قائمة المكونات سطرين على الأقل.';
        isValid = false;
      }
    }

    // تم تغيير formData.instructions إلى formData.steps
    if (!formData.steps.trim()) { // 🌟 تم التغيير
      newErrors.steps = 'يُرجى إدخال خطوات التحضير.'; // 🌟 تم التغيير
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (onAddRecipe) {
          onAddRecipe(formData);
      }
      
      setIsSubmitted(true);
      
      setFormData({
        title: '',
        ingredients: '',
        steps: '', // 🌟 تم التغيير
        image: '',
      });
      setErrors({});
      
      setTimeout(() => setIsSubmitted(false), 3000);

    } else {
      console.log('Validation failed:', errors);
      setIsSubmitted(false);
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-8 min-h-screen bg-gray-50">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-indigo-700">
        ✨ إضافة وصفة جديدة
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-2xl border border-gray-100">
        
        {/* رسالة النجاح */}
        {isSubmitted && (
          <div className="mb-4 p-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
            تم إرسال الوصفة بنجاح! شكراً لمشاركتك.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* حقل عنوان الوصفة */}
          <div>
            <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">
              عنوان الوصفة
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-4 transition duration-200 
                         ${errors.title ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-200 focus:border-indigo-500'}`}
              placeholder="مثل: لازانيا بالخضروات، دجاج مشوي بالعسل"
            />
            {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
          </div>

          {/* حقل صورة وهمية */}
          <div>
            <label htmlFor="image" className="block text-lg font-medium text-gray-700 mb-2">
              رابط الصورة (اختياري)
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition duration-200"
              placeholder="https://via.placeholder.com/600x400"
            />
          </div>

          {/* حقل المكونات (Textarea) */}
          <div>
            <label htmlFor="ingredients" className="block text-lg font-medium text-gray-700 mb-2">
              المكونات (اكتب كل مكون في سطر جديد)
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              rows="5"
              value={formData.ingredients}
              onChange={handleChange}
              className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-4 transition duration-200 resize-y 
                         ${errors.ingredients ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-200 focus:border-indigo-500'}`}
              placeholder="مثال:
1 كوب أرز
200 جرام لحم مفروم
ملعقة صغيرة ملح"
            ></textarea>
            {errors.ingredients && <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>}
          </div>

          {/* حقل خطوات التحضير (Textarea) */}
          <div>
            <label htmlFor="steps" className="block text-lg font-medium text-gray-700 mb-2">
              خطوات التحضير
            </label>
            <textarea
              id="steps" // 🌟 تم التغيير
              name="steps" // 🌟 تم التغيير
              rows="7"
              value={formData.steps} // 🌟 تم التغيير
              onChange={handleChange}
              className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-4 transition duration-200 resize-y 
                         ${errors.steps ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-indigo-200 focus:border-indigo-500'}`} // 🌟 تم التغيير
              placeholder="مثال:
1. سخن الفرن على درجة حرارة 180 درجة مئوية.
2. اخلط جميع المكونات في وعاء كبير.
3. ضع الخليط في قالب الخبز واخبزه لمدة 30 دقيقة."
            ></textarea>
            {errors.steps && <p className="mt-1 text-sm text-red-600">{errors.steps}</p>} {/* 🌟 تم التغيير */}
          </div>

          {/* زر الإرسال */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-3 text-lg font-semibold rounded-lg text-white bg-indigo-600 
                         hover:bg-indigo-700 transition duration-300 shadow-md 
                         focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              إضافة الوصفة
            </button>
          </div>
        </form>
      </div>
      <p className='mt-8 text-center text-gray-500'>تم تحديث المكون بنجاح لاستخدام المفتاح "steps" بدلاً من "instructions".</p>
    </div>
  );
};

export default AddRecipeForm;