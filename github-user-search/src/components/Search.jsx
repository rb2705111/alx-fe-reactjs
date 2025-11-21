import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    setUserData(null); // Clear previous results

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user');
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-component">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="search-input"
        />
        <button type="submit" disabled={loading}>
          Search
        </button>
      </form>

      {loading && <div className="loading">Loading...</div>}

      {error && <div className="error">{error}</div>}

      {userData && (
        <div className="user-card">
          <img src={userData.avatar_url} alt={userData.login} className="avatar" />
          <h2>{userData.name || userData.login}</h2>
          <p>Bio: {userData.bio || 'No bio available'}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="profile-link">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;