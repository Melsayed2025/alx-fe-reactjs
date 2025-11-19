// src/components/AddRecipeForm.jsx

import { useState } from 'react';
import useRecipeStore from '../recipeStore';

const AddRecipeForm = () => {
  // استخراج الدالة التي نحتاجها فقط لتجنب إعادة التصيير غير الضرورية
  const addRecipe = useRecipeStore(state => state.addRecipe);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return;

    // استدعاء دالة تحديث الحالة من مخزن Zustand
    addRecipe({ title, description }); 
    
    // مسح الحقول بعد الإضافة
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="عنوان الوصفة"
        required
        style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '100%' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="وصف الوصفة"
        required
        style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '100%', minHeight: '80px' }}
      />
      <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
        أضف وصفة جديدة
      </button>
    </form>
  );
};

export default AddRecipeForm;