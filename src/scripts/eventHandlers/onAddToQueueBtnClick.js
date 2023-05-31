import $localStorage from '../../helpers/$localStorage';
import renderMovieMarkup from '../../helpers/renderMovieMarkup';
import GET_CONSTANTS from '../GET_CONSTANTS';
import getRefs from '../getRefs';
import isMovieNotInStorage from '../isMovieNotInStorage';
import createPopularMarkup from '../markup/createPopularMarkup';
import removeMovieFromStorage from '../removeMovieFromStorage';
import saveMovieToStorage from '../saveMovieToStorage';

const { CURR_PAGE_POPULAR_STOR_KEY, QUEUE_STORAGE_KEY } = GET_CONSTANTS();
const refs = getRefs();

const onAddToQueueBtnClick = () => {
  const currPageMoviesArr = $localStorage.get(CURR_PAGE_POPULAR_STOR_KEY);
  const movieId = +document.querySelector('[data-modal-movie-inner]').dataset
    .modalMovieId;
  const movieObj = currPageMoviesArr.find(movie => movie.id === movieId);

  if (isMovieNotInStorage(QUEUE_STORAGE_KEY, movieId)) {
    saveMovieToStorage(QUEUE_STORAGE_KEY, movieObj);
    refs.modalQueueLabel.textContent = 'Remove from queue';
    return;
  }
  removeMovieFromStorage(QUEUE_STORAGE_KEY, movieId);
  refs.modalQueueLabel.textContent = 'Add to queue';

  const queueMovieArr = $localStorage.get(QUEUE_STORAGE_KEY);
  renderMovieMarkup(refs.libRoot, createPopularMarkup(queueMovieArr));
};

export default onAddToQueueBtnClick;
