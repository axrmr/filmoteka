import GET_CONSTANTS from '../ GET_CONSTANTS';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getDOMRefs from '../getDOMRefs';
import $localStorage from '../localStorage';
import renderMovieMarkup from '../renderMovieMarkup';

const { HOME_PAGE_MOVIES } = GET_CONSTANTS();
const dom = getDOMRefs();

function onHomeClick(e) {
  e.preventDefault();
  dom.libraryButtonsRoot.classList.remove('visible');
  dom.myLibrary.classList.remove('nav__link--current');
  dom.home.classList.add('nav__link--current');

  const homePageMovies = $localStorage.get(HOME_PAGE_MOVIES);

  renderMovieMarkup(dom.trending, createMovieItemMarkup(homePageMovies));
  document.getElementById('tui-pagination-container').style.display = 'block';
}

export default onHomeClick;
