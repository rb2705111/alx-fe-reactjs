import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '30px',
      backgroundColor: '#f0f0f0',
      borderRadius: '10px',
      maxWidth: '400px',
      margin: '20px auto',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        color: '#333',
        marginBottom: '20px',
        fontSize: '1.8rem'
      }}>
        Counter Application
      </h2>
      
      <p style={{ 
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#2563eb',
        margin: '20px 0'
      }}>
        Current Count: {count}
      </p>
      
      <div style={{ 
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '12px 24px',
            fontSize: '1rem',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#059669'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#10b981'}
        >
          Increment
        </button>
        
        <button 
          onClick={() => setCount(count - 1)}
          style={{
            padding: '12px 24px',
            fontSize: '1rem',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#dc2626'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#ef4444'}
        >
          Decrement
        </button>
        
        <button 
          onClick={() => setCount(0)}
          style={{
            padding: '12px 24px',
            fontSize: '1rem',
            backgroundColor: '#6b7280',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#4b5563'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#6b7280'}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
