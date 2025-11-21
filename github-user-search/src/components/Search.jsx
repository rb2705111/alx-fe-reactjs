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
import React, { useState } from 'react';
import { fetchUserData, searchUsersAdvanced } from '../services/githubService';

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    username: '',
    location: '',
    minRepos: ''
  });
  const [usersData, setUsersData] = useState([]);
  const [singleUserData, setSingleUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearchTypeToggle = () => {
    setIsAdvancedSearch(!isAdvancedSearch);
    // Clear results when switching search type
    setUsersData([]);
    setSingleUserData(null);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsersData([]);
    setSingleUserData(null);

    try {
      if (isAdvancedSearch) {
        // Advanced search
        const results = await searchUsersAdvanced(searchParams);
        setUsersData(results.items || []);
      } else {
        // Basic search
        if (!searchParams.username.trim()) {
          setError('Username is required for basic search');
          return;
        }
        const userData = await fetchUserData(searchParams.username);
        setSingleUserData(userData);
      }
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">GitHub User Search</h1>
        <button
          onClick={handleSearchTypeToggle}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          {isAdvancedSearch ? 'Switch to Basic Search' : 'Switch to Advanced Search'}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={searchParams.username}
              onChange={handleInputChange}
              placeholder="Enter GitHub username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          {isAdvancedSearch && (
            <>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={searchParams.location}
                  onChange={handleInputChange}
                  placeholder="Enter location"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700 mb-1">
                  Min. Repositories
                </label>
                <input
                  type="number"
                  id="minRepos"
                  name="minRepos"
                  value={searchParams.minRepos}
                  onChange={handleInputChange}
                  placeholder="Minimum repos"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </>
          )}
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 px-4 rounded-lg text-white font-medium ${
            loading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-indigo-600 hover:bg-indigo-700'
          } transition duration-200`}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {loading && (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-8 text-center">
          {error}
        </div>
      )}

      {!loading && !error && singleUserData && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex items-center space-x-6">
              <img 
                src={singleUserData.avatar_url} 
                alt={singleUserData.login} 
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800">
                  {singleUserData.name || singleUserData.login}
                </h2>
                <p className="text-gray-600 mt-1">@{singleUserData.login}</p>
                <p className="text-gray-700 mt-2">{singleUserData.bio || 'No bio available'}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-indigo-600">{singleUserData.followers}</p>
                <p className="text-gray-600">Followers</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-indigo-600">{singleUserData.following}</p>
                <p className="text-gray-600">Following</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-indigo-600">{singleUserData.public_repos}</p>
                <p className="text-gray-600">Repos</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-lg font-bold text-indigo-600">{singleUserData.location || 'N/A'}</p>
                <p className="text-gray-600">Location</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <a
                href={singleUserData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      )}

      {!loading && !error && usersData.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Search Results ({usersData.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usersData.map((user) => (
              <div key={user.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="p-5">
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={user.avatar_url} 
                      alt={user.login} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{user.login}</h3>
                      <p className="text-gray-600 text-sm">ID: {user.id}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-700">
                      <span className="font-medium">Type:</span> {user.type}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Score:</span> {user.score.toFixed(2)}
                    </p>
                  </div>
                  
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!loading && !error && !singleUserData && usersData.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No search results yet. Enter criteria and click "Search".</p>
        </div>
      )}
    </div>
  );
};

export default Search;