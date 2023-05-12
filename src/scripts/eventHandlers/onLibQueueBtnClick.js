import GET_CONSTANTS from '../ GET_CONSTANTS';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getDOMRefs from '../getDOMRefs';

const { QUEUE_STORAGE_KEY } = GET_CONSTANTS();
const { libQueueBtnEl, trendingEl } = getDOMRefs();

const onLibQueueBtnClick = () => {
  libQueueBtnEl.classList.add('current');

  const queueMovieArr = $localStorage.get(QUEUE_STORAGE_KEY);
  renderMovieMarkup(trendingEl, createMovieItemMarkup(queueMovieArr));
};

export default onLibQueueBtnClick;
