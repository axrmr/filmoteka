import $localStorage from '../helpers/$localStorage';
import renderMovieMarkup from '../helpers/renderMovieMarkup';
import GET_CONSTANTS from './GET_CONSTANTS';
import createMovieItemMarkup from './createMovieItemMarkup';
import getRefs from './getRefs';

const { HOME_PAGE_MOVIES } = GET_CONSTANTS();
const refs = getRefs();

const renderHomePage = () => {
  const homePageMovies = $localStorage.get(HOME_PAGE_MOVIES);
  renderMovieMarkup(refs.trending, createMovieItemMarkup(homePageMovies));
  document.getElementById('tui-pagination-container').style.display = 'block';
};

export default renderHomePage;
