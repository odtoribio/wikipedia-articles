import axios, { AxiosResponse } from 'axios';
import { Articles } from '../types/ArticleInterface';

export const fetchArticle = async (id: string, date: string) => {
  console.log("from fetch", {id, date})
  try {
    const response: AxiosResponse<Articles> = await axios.get('/api/feed/article', {
      params: {
        date,
        id
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
