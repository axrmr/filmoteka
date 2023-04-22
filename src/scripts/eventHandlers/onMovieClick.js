import GET_CONSTANTS from '../ GET_CONSTANTS';
import createMovieDetailsMarkup from '../createMovieDetailsMarkup';
import FetchMovie from '../FetchMovie';
import getDOMRefs from '../getDOMRefs';
import $localStorage from '../localStorage';
import toggleModal from '../toggleModal';
import handleModal from './handleModal';

const fetchMovie = new FetchMovie();
const dom = getDOMRefs();
const { WATCHED_STORAGE_KEY } = GET_CONSTANTS();

function onMovieClick(e) {
  if (!e.target.closest('[data-movies-item]')) {
    return;
  }
  const movieId = e.target.closest('[data-id]').dataset.id;
  const watchedMovieArr = $localStorage.get(WATCHED_STORAGE_KEY);
  const isMovieInWatched = watchedMovieArr.find(watched => watched.id === +movieId);

  if (isMovieInWatched) {
    console.log('is movie', isMovieInWatched);
    dom.modalContent.insertAdjacentHTML('afterbegin', createMovieDetailsMarkup(isMovieInWatched));

    toggleModal();
    window.addEventListener('keydown', handleModal.escKeyDown);
  } else {
    fetchMovie.details(movieId).then(data => {
      dom.modalContent.insertAdjacentHTML('afterbegin', createMovieDetailsMarkup(data));

      toggleModal();
      window.addEventListener('keydown', handleModal.escKeyDown);
    });
  }
}

export default onMovieClick;
