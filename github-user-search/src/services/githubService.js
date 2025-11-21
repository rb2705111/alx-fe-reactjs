import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const githubAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token if available
if (import.meta.env.VITE_GITHUB_API_KEY) {
  githubAPI.defaults.headers.common['Authorization'] = 
    `token ${import.meta.env.VITE_GITHUB_API_KEY}`;
}

/**
 * Fetches user data from GitHub API
 * @param {string} username - The GitHub username to search for
 * @returns {Promise<Object>} - The user data object
 */
export const fetchUserData = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

export default githubAPI;
import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const githubAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token if available
if (import.meta.env.VITE_GITHUB_API_KEY) {
  githubAPI.defaults.headers.common['Authorization'] = 
    `token ${import.meta.env.VITE_GITHUB_API_KEY}`;
}

/**
 * Fetches user data from GitHub API by username
 * @param {string} username - The GitHub username to search for
 * @returns {Promise<Object>} - The user data object
 */
export const fetchUserData = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

/**
 * Searches for users based on advanced criteria
 * @param {Object} searchParams - Object containing search criteria (username, location, minRepos)
 * @returns {Promise<Object>} - The search results object
 */
export const searchUsersAdvanced = async ({ username, location, minRepos }) => {
  try {
    // Construct the query string based on provided parameters
    let query = '';
    if (username) query += username;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;
    
    // Ensure the query string doesn't start with a space
    query = query.trim();

    const response = await githubAPI.get(`/search/users?q=${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

export default githubAPI;