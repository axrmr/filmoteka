import axios from 'axios';
import API_KEY from './API_KEY';
const BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list';

const fetchGenres = async () => {
  const response = await axios.get(BASE_URL, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  const { genres: genresArr } = response.data;

  return genresArr;
};

export default fetchGenres;
