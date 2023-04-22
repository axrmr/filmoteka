import GET_CONSTANTS from '../ GET_CONSTANTS';
import removeSelectedMovieFromStorage from '../removeSelectedMovieFromStorage';
import saveSelectedMovieToStorage from '../saveSelectedMovieToStorage';
import $localStorage from '../localStorage';

const { CURRENT_PAGE_MOVIES_STORAGE_KEY, QUEUE_STORAGE_KEY } = GET_CONSTANTS();

function onAddToQueueClick(e) {
  const target = e.target;
  const movieToAddId = +document.querySelector('[data-modal-content-item]').dataset.id;
  const currPageMoviesData = $localStorage.get(CURRENT_PAGE_MOVIES_STORAGE_KEY);
  const movieToAddObj = currPageMoviesData.find(movie => movie.id === +movieToAddId);

  if (!target.hasAttribute('data-in-queue')) {
    saveSelectedMovieToStorage({ key: QUEUE_STORAGE_KEY, movieObj: movieToAddObj, movieId: movieToAddId });
    this.setAttribute('data-in-queue', '');
    this.textContent = 'Remove';
    return;
  }
  if (target.hasAttribute('data-in-queue')) {
    removeSelectedMovieFromStorage(QUEUE_STORAGE_KEY, movieToAddId);
    this.textContent = 'Add to queue';
    this.removeAttribute('data-in-queue');
  }
}

export default onAddToQueueClick;
