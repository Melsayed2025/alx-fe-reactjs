import React from 'react';

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#333', 
      color: 'white', 
      textAlign: 'center', 
      padding: '15px', 
      marginTop: '40px', // زيادة المسافة للفصل عن MainContent
      borderRadius: '4px',
      fontSize: '0.9rem'
    }}>
      <p>© 2025 My React App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;