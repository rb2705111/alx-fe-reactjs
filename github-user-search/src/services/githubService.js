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