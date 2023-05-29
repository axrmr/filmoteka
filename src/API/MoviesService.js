import axios from 'axios';
import API_KEY from '../scripts/API_KEY';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const genres = '/genre/movie/list';
const details = '/movie/';
const trending = '/trending/movie/week';
const searchMovie = '/search/movie';
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

    static async fetchTrending(page = 1) {
        const response = await axios.get(trending, {
            params: {
                ...params,
                page,
            },
        });
        const { results: trendingDataArr } = response.data;

        return trendingDataArr;
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

        return response.data;
    }
}
export default MoviesService;
