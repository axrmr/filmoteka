import GET_CONSTANTS from '../ GET_CONSTANTS';
import $localStorage from '../$localStorage';
import createMovieItemMarkup from '../createMovieItemMarkup';
import displayElemStyle from '../displayElemStyle';
import getDOMRefs from '../getDOMRefs';
import renderMovieMarkup from '../renderMovieMarkup';

const { QUEUE_STORAGE_KEY } = GET_CONSTANTS();
const {
  libButtonsRootEl,
  homeBtnEl,
  myLibBtnEl,
  trendingEl,
  paginationRootEl,
  searchRootEl,
  libRootEl,
  libQueueBtnEl,
  libWatchedBtnEl,
} = getDOMRefs();

const onMyLibBtnClick = () => {
  const queueMovieArr = $localStorage.get(QUEUE_STORAGE_KEY);

  libQueueBtnEl.classList.add('current');
  libWatchedBtnEl.classList.remove('current');

  displayElemStyle('grid', libRootEl);
  displayElemStyle('none', trendingEl, paginationRootEl, searchRootEl);

  libButtonsRootEl.classList.add('visible');
  homeBtnEl.classList.remove('current');
  myLibBtnEl.classList.add('current');

  renderMovieMarkup(libRootEl, createMovieItemMarkup(queueMovieArr));
};

export default onMyLibBtnClick;
