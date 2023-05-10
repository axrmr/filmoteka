import GET_CONSTANTS from './ GET_CONSTANTS';
import createMovieItemMarkup from './createMovieItemMarkup';
import getDOMRefs from './getDOMRefs';
import $localStorage from './localStorage';
import renderMovieMarkup from './renderMovieMarkup';

const { HOME_PAGE_MOVIES } = GET_CONSTANTS();
const dom = getDOMRefs();

const renderHomePage = () => {
  const homePageMovies = $localStorage.get(HOME_PAGE_MOVIES);

  renderMovieMarkup(dom.trending, createMovieItemMarkup(homePageMovies));
  document.getElementById('tui-pagination-container').style.display = 'block';
};

export default renderHomePage;
