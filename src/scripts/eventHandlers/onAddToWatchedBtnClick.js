import $localStorage from '../../helpers/$localStorage';
import renderMovieMarkup from '../../helpers/renderMovieMarkup';
import GET_CONSTANTS from '../GET_CONSTANTS';
import createMovieItemMarkup from '../createMovieItemMarkup';
import getRefs from '../getRefs';
import isMovieNotInStorage from '../isMovieNotInStorage';
import removeMovieFromStorage from '../removeMovieFromStorage';
import saveMovieToStorage from '../saveMovieToStorage';

const refs = getRefs();
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
    return;
  }
  removeMovieFromStorage(WATCHED_STORAGE_KEY, movieId);
  watchedBtnLabel.textContent = 'Add to watched';

  const watchedMovieArr = $localStorage.get(WATCHED_STORAGE_KEY);
  renderMovieMarkup(refs.libRoot, createMovieItemMarkup(watchedMovieArr));
};

export default onAddToWatchedBtnClick;
