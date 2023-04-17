import GET_CONSTANTS from './scripts/ getConstants';
import createMovieItemMarkup from './scripts/createMovieItemMarkup';
import getDOMRefs from './scripts/getDOMRefs';
import $localStorage from './scripts/localStorage'; // save, get, remove - methods
import renderMovieMarkup from './scripts/renderMovieMarkup';

// EventHandlers
import handleModal from './scripts/eventHandlers/handleModal';
import onDOMContentLoaded from './scripts/eventHandlers/onDOMContentLoaded';
import onModalButtonsClick from './scripts/eventHandlers/onModalButtonsClick';
import onSearchFormSubmit from './scripts/eventHandlers/onSearchFormSubmit';
import onTrendingItemClick from './scripts/eventHandlers/onTrendingItemClick';

// Pagination
import './scripts/pagination';

const { WATCHED_STORAGE_KEY } = GET_CONSTANTS();
const dom = getDOMRefs();

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
dom.searchForm.addEventListener('submit', onSearchFormSubmit);
dom.trending.addEventListener('click', onTrendingItemClick);
dom.modal.addEventListener('click', handleModal.backdropClick);
dom.closeModalBtn.addEventListener('click', handleModal.closeBtnClick);
dom.modalButtonsWrap.addEventListener('click', onModalButtonsClick);
dom.myLibrary.addEventListener('click', onMyLibraryClick);

function onMyLibraryClick(e) {
  const watchedArr = $localStorage.get(WATCHED_STORAGE_KEY);

  if (!watchedArr.length) return;

  document.getElementById('tui-pagination-container').style.display = 'none';
  renderMovieMarkup(dom.trending, createMovieItemMarkup(watchedArr));
}
