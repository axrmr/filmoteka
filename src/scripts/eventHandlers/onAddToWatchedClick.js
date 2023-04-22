import GET_CONSTANTS from '../ GET_CONSTANTS';
import $localStorage from '../localStorage';
import removeSelectedMovieFromStorage from '../removeSelectedMovieFromStorage';
import saveSelectedMovieToStorage from '../saveSelectedMovieToStorage';

const { CURRENT_PAGE_MOVIES_STORAGE_KEY, WATCHED_STORAGE_KEY } = GET_CONSTANTS();

function onAddToWatchedClick(e) {
  const target = e.target;
  const movieToAddId = +document.querySelector('[data-modal-content-item]').dataset.id;
  const currPageMoviesData = $localStorage.get(CURRENT_PAGE_MOVIES_STORAGE_KEY);
  const movieToAddObj = currPageMoviesData.find(movie => movie.id === +movieToAddId);

  if (!target.hasAttribute('data-in-watched')) {
    this.setAttribute('data-in-watched', '');
    this.textContent = 'Remove';
    saveSelectedMovieToStorage({ key: WATCHED_STORAGE_KEY, movieObj: movieToAddObj, movieId: movieToAddId });
    return;
  }
  if (target.hasAttribute('data-in-watched')) {
    removeSelectedMovieFromStorage(WATCHED_STORAGE_KEY, movieToAddId);
    this.textContent = 'Add to watched';
    this.removeAttribute('data-in-watched');
  }
}

export default onAddToWatchedClick;
