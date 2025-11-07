function About() {
  return (
    <div style={{ 
      padding: '40px',
      backgroundColor: '#fff',
      minHeight: '80vh'
    }}>
      <h1 style={{ 
        fontSize: '2.5rem',
        color: '#2c3e50',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        About Us
      </h1>
      <p style={{ 
        fontSize: '1.2rem',
        color: '#555',
        maxWidth: '900px',
        margin: '0 auto',
        lineHeight: '1.8',
        textAlign: 'center'
      }}>
        Our company has been providing top-notch services since 1990. 
        We specialize in various fields including technology, marketing, and consultancy.
      </p>
    </div>
  );
}

export default About;
