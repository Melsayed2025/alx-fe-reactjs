import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // تحسين التنسيقات لجعل الأزرار أكثر جاذبية وتناسب التصميم
  const buttonStyle = {
    padding: '10px 20px',
    margin: '0 5px',
    borderRadius: '6px',
    cursor: 'pointer',
    border: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.2s'
  };

  return (
    <div style={{ 
        textAlign: 'center', 
        margin: '20px 0', 
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#fff'
    }}>
      <h3 style={{ color: '#007bff' }}>Interactive Counter</h3>
      <p style={{ fontSize: '24px', marginBottom: '15px', color: '#333' }}>
        Current Count: <span style={{ fontWeight: 'bold' }}>{count}</span>
      </p>
      
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ ...buttonStyle, backgroundColor: '#28a745', color: 'white' }}
      >
        Increment
      </button>
      
      <button 
        onClick={() => setCount(count - 1)} 
        style={{ ...buttonStyle, backgroundColor: '#dc3545', color: 'white' }}
      >
        Decrement
      </button>
      
      <button 
        onClick={() => setCount(0)} 
        style={{ ...buttonStyle, backgroundColor: '#ffc107', color: '#333' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;