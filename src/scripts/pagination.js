import Pagination from 'tui-pagination';
import GET_CONSTANTS from './ GET_CONSTANTS';
import MoviesService from './API/MoviesService';
import createMovieItemMarkup from './createMovieItemMarkup';
import getDOMRefs from './getDOMRefs';
import $localStorage from './localStorage';
import renderMovieMarkup from './renderMovieMarkup';

const dom = getDOMRefs();
const { CURRENT_PAGE_MOVIES_STORAGE_KEY } = GET_CONSTANTS();

const pagination = new Pagination(dom.paginationContainer, {
  totalItems: 10000,
  visiblePages: 4,
});

pagination.on('beforeMove', function (eventData) {
  MoviesService.fetchTrending(eventData.page).then(trendingDataArr => {
    $localStorage.save(CURRENT_PAGE_MOVIES_STORAGE_KEY, trendingDataArr);

    const movieItemsMarkup = createMovieItemMarkup(trendingDataArr);

    renderMovieMarkup(dom.trending, movieItemsMarkup);
  });
});
console.log(innerWidth);

export default pagination;
