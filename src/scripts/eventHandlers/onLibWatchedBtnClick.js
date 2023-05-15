import GET_CONSTANTS from '../ GET_CONSTANTS';
import $localStorage from '../$localStorage';
import createMovieItemMarkup from '../createMovieItemMarkup';
import displayElemStyle from '../displayElemStyle';
import getDOMRefs from '../getDOMRefs';
import renderMovieMarkup from '../renderMovieMarkup';

const { WATCHED_STORAGE_KEY } = GET_CONSTANTS();
const { libRootEl, libQueueBtnEl, libWatchedBtnEl, searchRootEl } =
  getDOMRefs();

const onLibWatchedBtnClick = () => {
  const watchedMovieArr = $localStorage.get(WATCHED_STORAGE_KEY);

  libWatchedBtnEl.classList.add('current');
  libQueueBtnEl.classList.remove('current');

  displayElemStyle('none', searchRootEl);
  displayElemStyle('grid', libRootEl);

  renderMovieMarkup(libRootEl, createMovieItemMarkup(watchedMovieArr));
};

export default onLibWatchedBtnClick;
