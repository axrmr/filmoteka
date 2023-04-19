import GET_CONSTANTS from '../ GET_CONSTANTS';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getDOMRefs from '../getDOMRefs';
import $localStorage from '../localStorage';
import renderMovieMarkup from '../renderMovieMarkup';

const { WATCHED_STORAGE_KEY } = GET_CONSTANTS();
const dom = getDOMRefs();

function onLibraryWatchedClick(e) {
  dom.libraryWatchedBtn.classList.add('current');
  dom.libraryQueueBtn.classList?.remove('current');
  const watchedMovieArr = $localStorage.get(WATCHED_STORAGE_KEY);
  renderMovieMarkup(dom.trending, createMovieItemMarkup(watchedMovieArr));
}

export default onLibraryWatchedClick;
