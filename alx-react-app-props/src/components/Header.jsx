import React from 'react';

function Header() {
  return (
    <header style={{ 
      backgroundColor: 'navy', 
      color: 'white', 
      textAlign: 'center', 
      padding: '20px',
      marginBottom: '20px', // إضافة مسافة للفصل عن المحتوى السفلي
      borderRadius: '8px' 
    }}>
      <h1>My Favorite Cities</h1>
    </header>
  );
}

export default Header;