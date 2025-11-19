// src/components/RecommendationsList.jsx

import React, { useEffect } from 'react';
import useRecipeStore from '../recipeStore';

const RecommendationsList = () => {
  const [recommendations, generateRecommendations] = useRecipeStore(state => [
    state.recommendations,
    state.generateRecommendations
  ]);

  // توليد التوصيات عند تحميل المكون
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) {
    return <p style={{ color: '#007bff' }}>لا توجد توصيات حالياً.</p>;
  }

  return (
    <div style={{ border: '1px solid #007bff', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
      <h3>💡 توصيات مقترحة</h3>
      {recommendations.map(recipe => (
        <div key={recipe.id} style={{ borderBottom: '1px dotted #007bff', padding: '8px 0' }}>
          <strong>{recipe.title}</strong>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
