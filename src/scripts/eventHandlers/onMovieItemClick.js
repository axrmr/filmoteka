import GET_CONSTANTS from '../ GET_CONSTANTS';
import MoviesService from '../API/MoviesService';
import createMovieDetailsMarkup from '../createMovieDetailsMarkup';
import getDOMRefs from '../getDOMRefs';
import isStorageNotIncludeMovie from '../isStorageNotIncludeMovie';
import toggleModal from '../toggleModal';
import handleModal from './handleModal';

const { QUEUE_STORAGE_KEY } = GET_CONSTANTS();
const dom = getDOMRefs();

const onMovieItemClick = e => {
  if (!e.target.closest('[data-movies-item]')) return;

  const movieId = +e.target.closest('[data-movie-id]').dataset.movieId;

  MoviesService.fetchDetails(movieId)
    .then(data => {
      dom.modalMovie.insertAdjacentHTML('afterbegin', createMovieDetailsMarkup(data));

      if (isStorageNotIncludeMovie(QUEUE_STORAGE_KEY, movieId)) {
        dom.addToQueueBtn.querySelector('.modal-queue-btn__label').textContent = 'Add to queue';
      } else {
        dom.addToQueueBtn.querySelector('.modal-queue-btn__label').textContent = 'Remove';
      }

      toggleModal();
      window.addEventListener('keydown', handleModal.escKeyDown);
    })
    .catch(console.log);

  MoviesService.fetchTrailer(movieId)
    .then(key => {
      if (!key) return;

      dom.trailerFrame.src = `http://www.youtube.com/embed/${key}`;
    })
    .catch(console.log);
};

export default onMovieItemClick;
