import Pagination from 'tui-pagination';
import MoviesService from '../API/MoviesService';
import $localStorage from '../helpers/$localStorage';
import Loader from '../helpers/Loader';
import renderMovieMarkup from '../helpers/renderMovieMarkup';
import GET_CONSTANTS from './GET_CONSTANTS';
import getRefs from './getRefs';
import createPopularMarkup from './markup/createPopularMarkup';

const { CURRENT_PAGE_MOVIES_STORAGE_KEY } = GET_CONSTANTS();
const refs = getRefs();
const popcornLoader = new Loader({
  el: refs.popcornLoader,
  className: 'visible',
});

const visiblePagesCount = document.body.clientWidth > 767 ? 10 : 4;

const pagination = new Pagination(refs.paginationRoot, {
  totalItems: 10_000,
  visiblePages: visiblePagesCount,
});

pagination.on('beforeMove', async eventData => {
  try {
    popcornLoader.show();
    const popularArr = await MoviesService.fetchPopular(eventData.page + 1);
    $localStorage.save(CURRENT_PAGE_MOVIES_STORAGE_KEY, popularArr);
    renderMovieMarkup(refs.popularRoot, createPopularMarkup(popularArr));
  } catch (error) {
    console.error(error);
  } finally {
    popcornLoader.hide();
  }
});

export { pagination };
