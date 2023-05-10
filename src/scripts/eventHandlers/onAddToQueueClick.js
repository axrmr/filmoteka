import GET_CONSTANTS from '../ GET_CONSTANTS';
import isStorageNotIncludeMovie from '../isStorageNotIncludeMovie';
import $localStorage from '../localStorage';
import removeMovieFromStorage from '../removeMovieFromStorage';
import saveMovieToStorage from '../saveMovieToStorage';

const { CURRENT_PAGE_MOVIES_STORAGE_KEY, QUEUE_STORAGE_KEY } = GET_CONSTANTS();

function onAddToQueueClick() {
  const movieId = +document.querySelector('[data-modal-movie-inner]').dataset.modalMovieId;
  const currPageMoviesData = $localStorage.get(CURRENT_PAGE_MOVIES_STORAGE_KEY);
  const movieObj = currPageMoviesData.find(movie => movie.id === movieId);

  if (isStorageNotIncludeMovie(QUEUE_STORAGE_KEY, movieId)) {
    saveMovieToStorage(QUEUE_STORAGE_KEY, movieObj);
    this.querySelector('.modal-queue-btn__label').textContent = 'Remove';
  } else {
    removeMovieFromStorage(QUEUE_STORAGE_KEY, movieId);
    this.querySelector('.modal-queue-btn__label').textContent = 'Add to queue';
  }
}

export default onAddToQueueClick;
