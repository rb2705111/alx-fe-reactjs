import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{ 
      padding: '40px',
      backgroundColor: '#fff',
      minHeight: '80vh'
    }}>
      <h1 style={{ 
        fontSize: '2.5rem',
        color: '#2c3e50',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        Contact Us
      </h1>
      <form onSubmit={handleSubmit} style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#f8f9fa',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ 
            display: 'block',
            width: '100%',
            padding: '12px',
            margin: '10px 0',
            fontSize: '1rem',
            border: '1px solid #ddd',
            borderRadius: '5px',
            boxSizing: 'border-box'
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ 
            display: 'block',
            width: '100%',
            padding: '12px',
            margin: '10px 0',
            fontSize: '1rem',
            border: '1px solid #ddd',
            borderRadius: '5px',
            boxSizing: 'border-box'
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ 
            display: 'block',
            width: '100%',
            padding: '12px',
            margin: '10px 0',
            fontSize: '1rem',
            border: '1px solid #ddd',
            borderRadius: '5px',
            minHeight: '150px',
            boxSizing: 'border-box',
            resize: 'vertical'
          }}
        />
        <button type="submit" style={{
          width: '100%',
          padding: '15px',
          fontSize: '1.1rem',
          backgroundColor: '#2c3e50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px',
          fontWeight: 'bold'
        }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
