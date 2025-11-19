// src/components/SearchBar.jsx

import React from 'react';
import useRecipeStore from '../recipeStore'; // تأكد من المسار الصحيح

const SearchBar = () => {
  // الحصول على دالة تحديث مصطلح البحث
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  
  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    // دالة setSearchTerm داخل Store تنادي filterRecipes تلقائيًا
  };

  return (
    <div style={{ margin: '20px 0', border: '1px solid #007bff', padding: '10px', borderRadius: '4px' }}>
      <input
        type="text"
        placeholder="ابحث بالاسم..."
        onChange={handleChange}
        style={{ padding: '8px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
      />
    </div>
  );
};

export default SearchBar;
