import Pagination from 'tui-pagination';
import GET_CONSTANTS from './ GET_CONSTANTS';
import $localStorage from './$localStorage';
import MoviesService from './API/MoviesService';
import Loader from './Loader';
import createMovieItemMarkup from './createMovieItemMarkup';
import getDOMRefs from './getDOMRefs';
import renderMovieMarkup from './renderMovieMarkup';

const { CURRENT_PAGE_MOVIES_STORAGE_KEY } = GET_CONSTANTS();
const { trendingEl, paginationRootEl, popcornLoaderEl } = getDOMRefs();
const popcornLoader = new Loader({ el: popcornLoaderEl, className: 'visible' });

const pagination = new Pagination(paginationRootEl, {
  totalItems: 10000,
  visiblePages: 4,
});

pagination.on('beforeMove', function (eventData) {
  popcornLoader.show();

  MoviesService.fetchTrending(eventData.page).then(trendingDataArr => {
    $localStorage.save(CURRENT_PAGE_MOVIES_STORAGE_KEY, trendingDataArr);
    renderMovieMarkup(trendingEl, createMovieItemMarkup(trendingDataArr));
    popcornLoader.hide();
  });
});

export default pagination;
