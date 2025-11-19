// src/components/RecipeDetails.jsx

import useRecipeStore from '../recipeStore';
import { useParams, Link } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id); // تحويل المعرّف من نص إلى رقم

  // انتقاء الوصفة المطابقة من المخزن
  const recipe = useRecipeStore(state => 
    state.recipes.find(r => r.id === recipeId)
  );

  if (!recipe) {
    return <p>عذراً، لم يتم العثور على هذه الوصفة.</p>;
  }

  return (
    <div style={{ border: '1px solid #007bff', padding: '20px', borderRadius: '8px' }}>
      <h1 style={{ color: '#007bff' }}>{recipe.title}</h1>
      <p style={{ fontSize: '1.1em' }}>{recipe.description}</p>
      
      <div style={{ marginTop: '20px' }}>
        <Link to={`/edit/${recipe.id}`}>
          <button style={{ padding: '8px 12px', backgroundColor: '#ffc107', color: 'black', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}>
            تعديل الوصفة
          </button>
        </Link>
        <DeleteRecipeButton recipeId={recipe.id} />
        <Link to="/" style={{ marginLeft: '10px', textDecoration: 'none', color: '#6c757d' }}>العودة للقائمة</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;