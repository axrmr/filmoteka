import GET_CONSTANTS from '../ GET_CONSTANTS';
import MoviesService from '../API/MoviesService';
import createMovieDetailsMarkup from '../createMovieDetailsMarkup';
import getDOMRefs from '../getDOMRefs';
import isMovieNotInStorage from '../isMovieNotInStorage';
import toggleModal from '../toggleModal';
import handleModal from './handleModal';

const { QUEUE_STORAGE_KEY } = GET_CONSTANTS();
const { addToQueueBtnEl, modalMovieEl, trailerFrameEl } = getDOMRefs();

const onMovieItemClick = e => {
  if (!e.target.closest('[data-movies-item]')) return;

  const movieId = +e.target.closest('[data-movie-id]').dataset.movieId;
  console.log(e.target);

  MoviesService.fetchDetails(movieId)
    .then(details => {
      modalMovieEl.insertAdjacentHTML('afterbegin', createMovieDetailsMarkup(details));

      if (isMovieNotInStorage(QUEUE_STORAGE_KEY, movieId)) {
        addToQueueBtnEl.querySelector('.modal-queue-btn__label').textContent = 'Add to queue';
      } else {
        addToQueueBtnEl.querySelector('.modal-queue-btn__label').textContent = 'Remove';
      }

      toggleModal();
      window.addEventListener('keydown', handleModal.escKeyDown);
    })
    .catch(console.error);

  MoviesService.fetchTrailer(movieId).then(setTrailerSrc).catch(console.error);
};

function setTrailerSrc(key) {
  if (!key) return;

  trailerFrameEl.src = `http://www.youtube.com/embed/${key}`;
}

export default onMovieItemClick;
