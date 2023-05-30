import $localStorage from '../helpers/$localStorage';
import renderMovieMarkup from '../helpers/renderMovieMarkup';
import showElement from '../helpers/showElement';
import GET_CONSTANTS from './GET_CONSTANTS';
import getRefs from './getRefs';
import createPopularMarkup from './markup/createPopularMarkup';

const { HOME_PAGE_MOVIES } = GET_CONSTANTS();
const refs = getRefs();

const renderHomePage = () => {
  const homePageMovies = $localStorage.get(HOME_PAGE_MOVIES);
  renderMovieMarkup(refs.popularRoot, createPopularMarkup(homePageMovies));
  showElement(refs.paginationRoot);
};

export default renderHomePage;
