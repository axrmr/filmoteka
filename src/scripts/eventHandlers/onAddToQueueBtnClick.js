import GET_CONSTANTS from '../ GET_CONSTANTS';
import $localStorage from '../$localStorage';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getDOMRefs from '../getDOMRefs';
import isMovieNotInStorage from '../isMovieNotInStorage';
import removeMovieFromStorage from '../removeMovieFromStorage';
import renderMovieMarkup from '../renderMovieMarkup';
import saveMovieToStorage from '../saveMovieToStorage';

const { CURRENT_PAGE_MOVIES_STORAGE_KEY, QUEUE_STORAGE_KEY } = GET_CONSTANTS();
const { libRootEl, modalQueueLabelEl } = getDOMRefs();

const onAddToQueueBtnClick = () => {
  const movieId = +document.querySelector('[data-modal-movie-inner]').dataset
    .modalMovieId;
  const currPageMoviesArr = $localStorage.get(CURRENT_PAGE_MOVIES_STORAGE_KEY);
  const movieObj = currPageMoviesArr.find(movie => movie.id === movieId);

  if (isMovieNotInStorage(QUEUE_STORAGE_KEY, movieId)) {
    saveMovieToStorage(QUEUE_STORAGE_KEY, movieObj);
    modalQueueLabelEl.textContent = 'Remove from queue';
  } else {
    removeMovieFromStorage(QUEUE_STORAGE_KEY, movieId);
    modalQueueLabelEl.textContent = 'Add to queue';

    const queueMovieArr = $localStorage.get(QUEUE_STORAGE_KEY);
    renderMovieMarkup(libRootEl, createMovieItemMarkup(queueMovieArr));
  }
};

export default onAddToQueueBtnClick;
