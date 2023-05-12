import GET_CONSTANTS from '../ GET_CONSTANTS';
import $localStorage from '../$localStorage';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getDOMRefs from '../getDOMRefs';
import isMovieNotInStorage from '../isMovieNotInStorage';
import removeMovieFromStorage from '../removeMovieFromStorage';
import renderMovieMarkup from '../renderMovieMarkup';
import saveMovieToStorage from '../saveMovieToStorage';

const { queueRootEl } = getDOMRefs();
const { CURRENT_PAGE_MOVIES_STORAGE_KEY, QUEUE_STORAGE_KEY } = GET_CONSTANTS();

function onAddToQueueBtnClick() {
  const movieId = +document.querySelector('[data-modal-movie-inner]').dataset.modalMovieId;
  const currPageMoviesData = $localStorage.get(CURRENT_PAGE_MOVIES_STORAGE_KEY);
  const movieObj = currPageMoviesData.find(movie => movie.id === movieId);

  if (isMovieNotInStorage(QUEUE_STORAGE_KEY, movieId)) {
    saveMovieToStorage(QUEUE_STORAGE_KEY, movieObj);
    this.querySelector('.modal-queue-btn__label').textContent = 'Remove';
  } else {
    removeMovieFromStorage(QUEUE_STORAGE_KEY, movieId);
    this.querySelector('.modal-queue-btn__label').textContent = 'Add to queue';

    const queueMovieArr = $localStorage.get(QUEUE_STORAGE_KEY);
    renderMovieMarkup(queueRootEl, createMovieItemMarkup(queueMovieArr));
  }
}

export default onAddToQueueBtnClick;
