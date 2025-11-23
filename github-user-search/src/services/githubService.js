import axios from "axios";

const SEARCH_API_URL = "https://api.github.com/search/users";


export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = "";

    
    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>${minRepos} `;

    const response = await axios.get(SEARCH_API_URL, {
      params: {
        q: query.trim(),
      },
    });

    return response.data; 
  } catch (error) {
    console.error("Error fetching search results:", error.message);
    throw error;
  }
};


export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
};
