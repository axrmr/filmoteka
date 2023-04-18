import axios from 'axios';
import API_KEY from './API_KEY';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

const searchMovies = async searchQuery => {
  const response = await axios.get(BASE_URL, {
    params: {
      api_key: API_KEY,
      query: searchQuery,
      language: 'en-US',
    },
  });

  return response.data.results;
};

export default searchMovies;
