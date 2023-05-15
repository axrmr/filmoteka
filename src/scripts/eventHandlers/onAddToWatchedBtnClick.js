import GET_CONSTANTS from '../ GET_CONSTANTS';
import $localStorage from '../$localStorage';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getDOMRefs from '../getDOMRefs';
import isMovieNotInStorage from '../isMovieNotInStorage';
import removeMovieFromStorage from '../removeMovieFromStorage';
import renderMovieMarkup from '../renderMovieMarkup';
import saveMovieToStorage from '../saveMovieToStorage';

const { libRootEl } = getDOMRefs();
const { CURRENT_PAGE_MOVIES_STORAGE_KEY, WATCHED_STORAGE_KEY } =
  GET_CONSTANTS();

const onAddToWatchedBtnClick = () => {
  const watchedBtnLabel = document.querySelector('.modal-watched-btn__label');
  const movieId = +document.querySelector('[data-modal-movie-inner]').dataset
    .modalMovieId;
  const currPageMoviesArr = $localStorage.get(CURRENT_PAGE_MOVIES_STORAGE_KEY);
  const movieObj = currPageMoviesArr.find(movie => movie.id === movieId);

  if (isMovieNotInStorage(WATCHED_STORAGE_KEY, movieId)) {
    saveMovieToStorage(WATCHED_STORAGE_KEY, movieObj);
    watchedBtnLabel.textContent = 'Remove  watched';
  } else {
    removeMovieFromStorage(WATCHED_STORAGE_KEY, movieId);
    watchedBtnLabel.textContent = 'Add to watched';

    const watchedMovieArr = $localStorage.get(WATCHED_STORAGE_KEY);
    renderMovieMarkup(libRootEl, createMovieItemMarkup(watchedMovieArr));
  }
};

export default onAddToWatchedBtnClick;
