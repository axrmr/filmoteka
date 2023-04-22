import axios from 'axios';
import API_KEY from './API_KEY';

const BASE_URL = 'https://api.themoviedb.org/3';
const genres = '/genre/movie/list';
const details = '/movie/';
const trending = '/trending/movie/week';

const params = {
  api_key: API_KEY,
  language: 'en-US',
};

class FetchMovie {
  async genres() {
    const response = await axios.get(BASE_URL + genres, {
      params,
    });
    const { genres: genresArr } = response.data;

    return genresArr;
  }

  async details(id) {
    const response = await axios.get(BASE_URL + details + id, {
      params,
    });

    return response.data;
  }

  async trending(page = 1) {
    const response = await axios.get(BASE_URL + trending, {
      params: {
        ...params,
        page,
      },
    });
    const { results: trendingDataArr } = response.data;

    return trendingDataArr;
  }
}

export default FetchMovie;
