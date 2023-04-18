import GET_CONSTANTS from '../ GET_CONSTANTS';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getDOMRefs from '../getDOMRefs';
import $localStorage from '../localStorage';
import renderMovieMarkup from '../renderMovieMarkup';

const { QUEUE_STORAGE_KEY, WATCHED_STORAGE_KEY } = GET_CONSTANTS();
const dom = getDOMRefs();

function onLibraryButtonsRootClick(e) {
  if (e.target.hasAttribute('data-watched')) {
    const watchedMovieData = $localStorage.get(WATCHED_STORAGE_KEY);
    renderMovieMarkup(dom.trending, createMovieItemMarkup(watchedMovieData));
    return;
  }
  if (e.target.hasAttribute('data-queue')) {
    const queueMovieData = $localStorage.get(QUEUE_STORAGE_KEY);
    renderMovieMarkup(dom.trending, createMovieItemMarkup(queueMovieData));
  }
}

export default onLibraryButtonsRootClick;
