import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week?page=1';

const fetchTrending = async () => {
  const response = await axios.get(BASE_URL, {
    params: {
      api_key: process.env.API_KEY,
      language: 'en-US',
    },
  });
  console.log('tre', response.data);

  const { results: trendingDataArr } = response.data;

  return trendingDataArr;
};

export default fetchTrending;
