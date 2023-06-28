import axios from 'axios';

const API_KEY = '88ef0fcd-2343-47f5-8133-a4c05b129bcd';
const API_URL = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json';

const fetchWordDetails = async (word) => {
  try {
    const response = await axios.get(`${API_URL}/${word}?key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching word details:', error);
    throw error;
  }
};

export { fetchWordDetails };
