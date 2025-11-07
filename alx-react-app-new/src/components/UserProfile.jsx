const UserProfile = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;
function UserProfile(props) {
  return (
    <div style={{ 
      border: '1px solid gray', 
      padding: '20px', 
      margin: '15px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ 
        color: 'blue',
        margin: '0 0 10px 0',
        fontSize: '1.8rem'
      }}>
        {props.name}
      </h2>
      <p style={{ 
        fontSize: '1.1rem',
        margin: '8px 0'
      }}>
        Age: <span style={{ 
          fontWeight: 'bold',
          color: '#333'
        }}>
          {props.age}
        </span>
      </p>
      <p style={{ 
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#555',
        marginTop: '10px'
      }}>
        Bio: {props.bio}
      </p>
    </div>
  );
}

export default UserProfile;