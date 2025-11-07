import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '15px 30px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        margin: '0',
        padding: '0'
      }}>
        <li>
          <Link to="/" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            padding: '10px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            padding: '10px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            padding: '10px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            padding: '10px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
