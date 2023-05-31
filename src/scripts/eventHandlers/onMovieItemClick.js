import MoviesService from '../../API/MoviesService';
import Loader from '../../helpers/Loader';
import renderMovieMarkup from '../../helpers/renderMovieMarkup';
import GET_CONSTANTS from '../GET_CONSTANTS';
import getRefs from '../getRefs';
import isMovieNotInStorage from '../isMovieNotInStorage';
import createMovieDetailsMarkup from '../markup/createMovieDetailsMarkup';
import modal from '../modal';
import handleModal from './handleModal';

const { QUEUE_STORAGE_KEY, WATCHED_STORAGE_KEY } = GET_CONSTANTS();
const refs = getRefs();
const popcornLoader = new Loader({
  el: refs.popcornLoader,
  className: 'visible',
});

const onMovieItemClick = e => {
  if (!e.target.closest('[data-movies-item]')) return;
  const movieId = +e.target.closest('[data-movie-id]').dataset.movieId;

  popcornLoader.show();
  MoviesService.fetchDetails(movieId)
    .then(details => {
      modal.show();
      refs.modalQueueLabel.textContent = isMovieNotInStorage(
        QUEUE_STORAGE_KEY,
        movieId
      )
        ? 'Add to queue'
        : 'Remove  queued';

      refs.modalWatchedLabel.textContent = isMovieNotInStorage(
        WATCHED_STORAGE_KEY,
        movieId
      )
        ? 'Add to watched'
        : 'Remove  watched';

      renderMovieMarkup(refs.modalMovie, createMovieDetailsMarkup(details));
      window.addEventListener('keydown', handleModal.escKeyDown);
    })
    .catch(console.error)
    .finally(() => popcornLoader.hide());
};

export default onMovieItemClick;
