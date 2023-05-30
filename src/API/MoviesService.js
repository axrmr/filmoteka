import axios from 'axios';
import API_KEY from '../scripts/API_KEY';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const genres = '/genre/movie/list';
const details = '/movie/';
const trending = '/trending/movie/week';
const searchMovie = '/search/movie';
const popular = '/movie/popular';
const topRated = '/movie/top_rated';

const params = {
  api_key: API_KEY,
  language: 'en-US',
};

class MoviesService {
  static async fetchGenres() {
    const response = await axios.get(genres, {
      params,
    });
    const { genres: genresArr } = response.data;

    return genresArr;
  }

  static async fetchDetails(id) {
    const response = await axios.get(details + id, {
      params,
    });

    return response.data;
  }

  static async fetchTrending() {
    const response = await axios.get(trending, {
      params: {
        ...params,
      },
    });
    const { results: popular } = response.data;

    return popular;
  }

  static async fetchTrailer(id) {
    const response = await axios.get(`/movie/${id}/videos`, {
      params,
    });
    const { key: keyStr } = response.data.results[0];

    return keyStr;
  }

  static async searchMovie(searchQuery) {
    const response = await axios.get(searchMovie, {
      params: {
        ...params,
        query: searchQuery,
      },
    });

    return response.data.results;
  }

  static async fetchTopRated() {
    const response = await axios.get(topRated, {
      params,
    });

    return response.data.results;
  }

  static async fetchPopular(page = 2) {
    const response = await axios.get(popular, {
      params: {
        ...params,
        page,
      },
    });

    return response.data.results;
  }
}
export default MoviesService;
