import axios from 'axios';

export const fetchItemsByDate = async (date: string) => {
  try {
    const response = await axios.get('/api/feed', {
      params: {
        date
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
