import GET_CONSTANTS from '../ GET_CONSTANTS';
import MoviesService from '../API/MoviesService';
import createMovieDetailsMarkup from '../createMovieDetailsMarkup';
import getDOMRefs from '../getDOMRefs';
import isMovieNotInStorage from '../isMovieNotInStorage';
import Loader from '../Loader';
import renderMovieMarkup from '../renderMovieMarkup';
import toggleModal from '../toggleModal';
import handleModal from './handleModal';

const { QUEUE_STORAGE_KEY } = GET_CONSTANTS();
const { addToQueueBtnEl, modalMovieEl, popcornLoaderEl } = getDOMRefs();
const popcornLoader = new Loader({ el: popcornLoaderEl, className: 'visible' });

const onMovieItemClick = e => {
  if (!e.target.closest('[data-movies-item]')) return;

  const movieId = +e.target.closest('[data-movie-id]').dataset.movieId;

  popcornLoader.show();

  MoviesService.fetchDetails(movieId)
    .then(details => {
      toggleModal();

      if (isMovieNotInStorage(QUEUE_STORAGE_KEY, movieId)) {
        addToQueueBtnEl.querySelector('.modal-queue-btn__label').textContent = 'Add to queue';
      } else {
        addToQueueBtnEl.querySelector('.modal-queue-btn__label').textContent = 'Remove';
      }

      renderMovieMarkup(modalMovieEl, createMovieDetailsMarkup(details));
      window.addEventListener('keydown', handleModal.escKeyDown);

      popcornLoader.hide();
    })
    .catch(console.error);
};

export default onMovieItemClick;
