import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <p style={{ fontSize: '20px', marginBottom: '10px' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px', padding: '10px' }}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginRight: '10px', padding: '10px' }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ padding: '10px' }}>Reset</button>
    </div>
  );
}

export default Counter;
