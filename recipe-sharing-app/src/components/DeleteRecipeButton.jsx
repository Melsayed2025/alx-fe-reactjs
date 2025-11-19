// src/components/DeleteRecipeButton.jsx

import useRecipeStore from '../recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('هل أنت متأكد من حذف هذه الوصفة؟')) {
      deleteRecipe(recipeId);
      navigate('/'); // العودة إلى القائمة بعد الحذف
    }
  };

  return (
    <button 
      onClick={handleDelete}
      style={{ padding: '8px 12px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}
    >
      حذف
    </button>
  );
};

export default DeleteRecipeButton;