import GET_CONSTANTS from '../ GET_CONSTANTS';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getDOMRefs from '../getDOMRefs';
import $localStorage from '../localStorage';
import renderMovieMarkup from '../renderMovieMarkup';

const { QUEUE_STORAGE_KEY } = GET_CONSTANTS();
const dom = getDOMRefs();

function onLibraryQueueClick(e) {
  dom.libraryQueueBtn.classList.add('current');

  const queueMovieArr = $localStorage.get(QUEUE_STORAGE_KEY);
  renderMovieMarkup(dom.trending, createMovieItemMarkup(queueMovieArr));
}

export default onLibraryQueueClick;
