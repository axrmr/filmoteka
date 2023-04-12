import axios from 'axios';

const fetchMovieDetails = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  );
  console.log('details', response.data);

  return response.data;
};

export default fetchMovieDetails;
