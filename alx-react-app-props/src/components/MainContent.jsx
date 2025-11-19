import React from 'react';

function MainContent() {
  return (
    <main
      style={{
        backgroundColor: '#e0f7fa',
        padding: '20px',
        minHeight: '200px',
        textAlign: 'center',
        borderRadius: '8px',
        marginTop: '20px'
      }}
    >
      <h2 style={{ color: '#006064' }}>Welcome to My App</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}

export default MainContent;