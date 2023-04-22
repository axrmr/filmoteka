import Pagination from 'tui-pagination';
import GET_CONSTANTS from './ GET_CONSTANTS';
import FetchMovie from './FetchMovie';
import createMovieItemMarkup from './createMovieItemMarkup';
import getDOMRefs from './getDOMRefs';
import $localStorage from './localStorage';
import renderMovieMarkup from './renderMovieMarkup';

const fetchMovie = new FetchMovie();
const dom = getDOMRefs();
const { CURRENT_PAGE_MOVIES_STORAGE_KEY } = GET_CONSTANTS();

const pagination = new Pagination(dom.paginationContainer, {
  totalItems: 10000,
  visiblePages: 4,
});

pagination.on('beforeMove', function (eventData) {
  fetchMovie.trending(eventData.page).then(trendingDataArr => {
    $localStorage.save(CURRENT_PAGE_MOVIES_STORAGE_KEY, trendingDataArr);

    const movieItemsMarkup = createMovieItemMarkup(trendingDataArr);

    renderMovieMarkup(dom.trending, movieItemsMarkup);
  });
});

export default pagination;
