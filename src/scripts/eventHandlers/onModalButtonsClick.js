import GET_CONSTANTS from '../ getConstants';
import isNotIncludeMovie from '../isNotIncludeMovie';
import $localStorage from '../localStorage';

const { CURRENT_PAGE_MOVIES_STORAGE_KEY, WATCHED_STORAGE_KEY, QUEUE_STORAGE_KEY } = GET_CONSTANTS();

function onModalButtonsClick(e) {
  const target = e.target;
  const movieToAddId = +document.querySelector('[data-modal-content-item]').dataset.id;
  const currPageMoviesData = $localStorage.get(CURRENT_PAGE_MOVIES_STORAGE_KEY);
  const movieToAddData = currPageMoviesData.find(movie => movie.id === +movieToAddId);

  addToWatchedOrQueue(target, movieToAddId, movieToAddData);
}

function addToWatchedOrQueue(targetBtn, movieToAddId, movieToAddData) {
  if (targetBtn.hasAttribute('data-add-to-watched')) {
    const watchedArr = $localStorage.get(WATCHED_STORAGE_KEY);
    isNotIncludeMovie(watchedArr, movieToAddId) &&
      watchedArr.push(movieToAddData) &&
      $localStorage.save(WATCHED_STORAGE_KEY, watchedArr);

    return;
  }
  if (targetBtn.hasAttribute('data-add-to-queue')) {
    const queueArr = $localStorage.get(QUEUE_STORAGE_KEY);
    isNotIncludeMovie(queueArr, movieToAddId) &&
      queueArr.push(movieToAddData) &&
      $localStorage.save(QUEUE_STORAGE_KEY, queueArr);
  }
}

export default onModalButtonsClick;
