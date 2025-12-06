import React, { useState } from 'react';

const AddRecipeForm = () => {
const [formData, setFormData] = useState({
  title: '',
  ingredients: '',
  steps: '', // 🌟 التغيير هنا
  image: '', 
});

  // حالة لتخزين أخطاء التحقق
  const [errors, setErrors] = useState({});
  // حالة لتأكيد الإرسال الناجح
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 1. معالج التغيير: تحديث حالة formData عند كتابة المستخدم
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 2. منطق التحقق من صحة النموذج
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.title.trim()) {
      newErrors.title = 'يُرجى إدخال عنوان الوصفة.';
      isValid = false;
    }

    // التحقق من حقل المكونات: يجب ألا يكون فارغاً
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'يُرجى إدخال المكونات.';
      isValid = false;
    } else {
      // مثال على التحقق المتقدم: التأكد من وجود سطرين على الأقل (مكونين)
      const ingredientLines = formData.ingredients.trim().split('\n').filter(line => line.trim() !== '');
      if (ingredientLines.length < 2) {
        newErrors.ingredients = 'يجب أن تتضمن قائمة المكونات سطرين على الأقل.';
        isValid = false;
      }
    }

    if (!formData.instructions.trim()) {
      newErrors.instructions = 'يُرجى إدخال خطوات التحضير.';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  // 3. معالج الإرسال: التحقق من الصحة أولاً
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // 🌟 يتم هنا تنفيذ منطق إرسال البيانات إلى الـ API أو تخزينها
      console.log('Recipe Data Submitted:', formData);
      
      setIsSubmitted(true);
      // مسح النموذج بعد الإرسال الناجح (اختياري)
      setFormData({
        title: '',
        ingredients: '',
        instructions: '',
        image: '',
      });
      setErrors({});
      
      // إخفاء رسالة النجاح بعد 3 ثوانٍ
      setTimeout(() => setIsSubmitted(false), 3000);

    } else {
      // في حالة وجود أخطاء، سيتم عرضها للمستخدم
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
              // Tailwind Styling: تصميم استجابي وتركيز جذاب
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
              // Tailwind Styling: تصميم استجابي وتركيز جذاب
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
            <label htmlFor="instructions" className="block text-lg font-medium text-gray-700 mb-2">
              خطوات التحضير
            </label>
            <textarea
  id="steps"
  name="steps" // 🌟 والتغيير هنا
  rows="7"
  value={formData.steps} // 🌟 والتغيير هنا
  // ... (بقية التنسيقات)
></textarea>

            {errors.instructions && <p className="mt-1 text-sm text-red-600">{errors.instructions}</p>}
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
    </div>
  );
};

export default AddRecipeForm;