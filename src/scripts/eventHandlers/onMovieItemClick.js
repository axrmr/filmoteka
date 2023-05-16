import GET_CONSTANTS from '../ GET_CONSTANTS';
import MoviesService from '../API/MoviesService';
import createMovieDetailsMarkup from '../createMovieDetailsMarkup';
import getDOMRefs from '../getDOMRefs';
import isMovieNotInStorage from '../isMovieNotInStorage';
import Loader from '../Loader';
import renderMovieMarkup from '../renderMovieMarkup';
import modal from '../modal';
import handleModal from './handleModal';

const { QUEUE_STORAGE_KEY, WATCHED_STORAGE_KEY } = GET_CONSTANTS();
const {
  addToQueueBtnEl,
  modalMovieEl,
  modalQueueLabelEl,
  modalWatchedLabelEl,
  popcornLoaderEl,
} = getDOMRefs();
const popcornLoader = new Loader({ el: popcornLoaderEl, className: 'visible' });

const onMovieItemClick = e => {
  if (!e.target.closest('[data-movies-item]')) return;

  const movieId = +e.target.closest('[data-movie-id]').dataset.movieId;

  popcornLoader.show();

  MoviesService.fetchDetails(movieId)
    .then(details => {
      modal.show();

      modalQueueLabelEl.textContent = isMovieNotInStorage(
        QUEUE_STORAGE_KEY,
        movieId
      )
        ? 'Add to queue'
        : 'Remove  queued';

      modalWatchedLabelEl.textContent = isMovieNotInStorage(
        WATCHED_STORAGE_KEY,
        movieId
      )
        ? 'Add to watched'
        : 'Remove  watched';

      renderMovieMarkup(modalMovieEl, createMovieDetailsMarkup(details));

      window.addEventListener('keydown', handleModal.escKeyDown);

      popcornLoader.hide();
    })
    .catch(console.error);
};

export default onMovieItemClick;
