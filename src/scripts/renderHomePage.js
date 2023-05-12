import GET_CONSTANTS from './ GET_CONSTANTS';
import $localStorage from './$localStorage';
import createMovieItemMarkup from './createMovieItemMarkup';
import getDOMRefs from './getDOMRefs';
import renderMovieMarkup from './renderMovieMarkup';

const { HOME_PAGE_MOVIES } = GET_CONSTANTS();
const { trendingEl } = getDOMRefs();

const renderHomePage = () => {
  const homePageMovies = $localStorage.get(HOME_PAGE_MOVIES);
  renderMovieMarkup(trendingEl, createMovieItemMarkup(homePageMovies));
  document.getElementById('tui-pagination-container').style.display = 'block';
};

export default renderHomePage;
