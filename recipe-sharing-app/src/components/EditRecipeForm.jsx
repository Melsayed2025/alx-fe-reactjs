// src/components/EditRecipeForm.jsx

import { useState, useEffect } from 'react';
import useRecipeStore from '../recipeStore';
import { useParams, useNavigate } from 'react-router-dom';

const EditRecipeForm = () => {
const { id } = useParams();
const recipeId = parseInt(id);
const navigate = useNavigate();

  // الحصول على الوصفة الحالية ودالة التحديث
const [recipe, updateRecipe] = useRecipeStore(state => [
    state.recipes.find(r => r.id === recipeId),
    state.updateRecipe
]);

const [title, setTitle] = useState('');
const [description, setDescription] = useState('');

  // تهيئة الحقول بقيم الوصفة الموجودة عند التحميل
useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) {
    return <p>الوصفة غير موجودة.</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // استدعاء دالة تحديث الحالة
    updateRecipe({ id: recipeId, title, description });
    
    navigate(`/recipes/${recipeId}`); // العودة إلى صفحة التفاصيل
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ffc107', padding: '20px', borderRadius: '8px' }}>
      <h2>تعديل: {recipe.title}</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="عنوان الوصفة"
        required
        style={{ display: 'block', marginBottom: '10px', padding: '10px', width: '100%', border: '1px solid #ffc107' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="وصف الوصفة"
        required
        style={{ display: 'block', marginBottom: '10px', padding: '10px', width: '100%', minHeight: '100px', border: '1px solid #ffc107' }}
      />
      <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#ffc107', color: 'black', border: 'none', borderRadius: '4px' }}>
        حفظ التعديلات
      </button>
    </form>
  );
};

export default EditRecipeForm;