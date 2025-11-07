function MainContent() {
    return (
        <main>
            <p>I love to visit New York, Paris, and Tokyo.</p>
        </main>
    );
}

export default MainContent;
function MainContent() {
  return (
    <main style={{ 
      padding: '30px 20px',
      backgroundColor: '#f5f5f5',
      minHeight: '60vh',
      textAlign: 'center'
    }}>
      <p style={{ 
        fontSize: '1.2rem',
        color: '#333',
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: '1.8',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}

export default MainContent;