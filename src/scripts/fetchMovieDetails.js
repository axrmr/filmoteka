import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/genre/movie/';

const fetchMovieDetails = async id => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: process.env.API_KEY,
      language: 'en-US',
    },
  });

  return response.data;
};

export default fetchMovieDetails;
