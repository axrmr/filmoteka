import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie/lists?page=1';

const fetchMovies = () => {
  const response = axios.get(BASE_URL, {
    params: {
      api_key: process.env.API_KEY,
      language: 'en-US',
    },
  });
  console.log(response);
};

export default fetchMovies;
