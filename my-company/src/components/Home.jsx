function Home() {
  return (
    <div style={{ 
      padding: '40px',
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      minHeight: '80vh'
    }}>
      <h1 style={{ 
        fontSize: '3rem',
        color: '#2c3e50',
        marginBottom: '20px'
      }}>
        Welcome to Our Company
      </h1>
      <p style={{ 
        fontSize: '1.3rem',
        color: '#555',
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: '1.8'
      }}>
        We are dedicated to delivering excellence in all our services.
      </p>
    </div>
  );
}

export default Home;
