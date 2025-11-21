import { useState } from 'react';
import { searchUsers, getUserDetails } from '../services/githubService';

const UserSearch = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const data = await getUserDetails(username);
      setUserData(data);
    } catch (err) {
      setError('User not found or API error occurred');
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="search-input"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      
      {error && <div className="error">{error}</div>}
      
      {userData && (
        <div className="user-card">
          <img src={userData.avatar_url} alt={userData.login} className="avatar" />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio || 'No bio available'}</p>
          <div className="user-info">
            <p>Followers: {userData.followers}</p>
            <p>Following: {userData.following}</p>
            <p>Public Repos: {userData.public_repos}</p>
            <p>Location: {userData.location || 'Not specified'}</p>
          </div>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="profile-link">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default UserSearch;