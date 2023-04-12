import axios from 'axios';
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

const searchMovies = async searchQuery => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=d32b690130298eaea0112cc3e502a328&language=en-US&page=1&include_adult=false`
  );
  console.log('search', response);

  return response.data.results;
};

export default searchMovies;
