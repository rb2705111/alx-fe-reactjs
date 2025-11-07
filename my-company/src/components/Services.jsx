function Services() {
  return (
    <div style={{ 
      padding: '40px',
      backgroundColor: '#f8f9fa',
      minHeight: '80vh'
    }}>
      <h1 style={{ 
        fontSize: '2.5rem',
        color: '#2c3e50',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        Our Services
      </h1>
      <ul style={{ 
        listStyle: 'none',
        padding: '0',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <li style={{ 
          fontSize: '1.3rem',
          padding: '15px',
          margin: '10px 0',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          Technology Consulting
        </li>
        <li style={{ 
          fontSize: '1.3rem',
          padding: '15px',
          margin: '10px 0',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          Market Analysis
        </li>
        <li style={{ 
          fontSize: '1.3rem',
          padding: '15px',
          margin: '10px 0',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          Product Development
        </li>
      </ul>
    </div>
  );
}

export default Services;
