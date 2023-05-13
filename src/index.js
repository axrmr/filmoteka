import getDOMRefs from './scripts/getDOMRefs';

// EventHandlers
import handleModal from './scripts/eventHandlers/handleModal';
import onAddToQueueClick from './scripts/eventHandlers/onAddToQueueBtnClick';
import onCloseTrailerClick from './scripts/eventHandlers/onCloseTrailerClick';
import onDOMContentLoaded from './scripts/eventHandlers/onDOMContentLoaded';
import onHomeClick from './scripts/eventHandlers/onHomeBtnClick';
import onMovieItemClick from './scripts/eventHandlers/onMovieItemClick';
import onMyLibraryClick from './scripts/eventHandlers/onMyLibBtnClick';
import onSearchFormSubmit from './scripts/eventHandlers/onSearchFormSubmit';
import onWatchTrailerBtnClick from './scripts/eventHandlers/onWatchTrailerBtnClick';
import hideMobileKeyboardOnReturn from './scripts/hideMobileKeyboardOnReturn';

// Pagination
import './scripts/pagination';

const {
  closeModalBtnEl,
  closeTrailerBtnEl,
  homeBtnEl,
  logoEl,
  modalBackdropEl,
  myLibBtnEl,
  searchFormEl,
  addToQueueBtnEl,
  watchTrailerBtnEl,
  moviesRootEl,
} = getDOMRefs();

// REFACTOR $LOCAL STORAGE. SHOULD NOT ADD NULL IN STORAGE
// CHANGE TOGGLE MODAL TO TOGGLE ELEM VISIBILITY
// ADD IMAGE IF PAGE IS EMPTY
// FIX SEARCH IN LIBRARY DOESNT GO ON HOME PAGE

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
closeModalBtnEl.addEventListener('click', handleModal.closeBtnClick);
closeTrailerBtnEl.addEventListener('click', onCloseTrailerClick);
homeBtnEl.addEventListener('click', onHomeClick);
logoEl.addEventListener('click', onHomeClick);
modalBackdropEl.addEventListener('click', handleModal.backdropClick);
myLibBtnEl.addEventListener('click', onMyLibraryClick);
searchFormEl.addEventListener('submit', onSearchFormSubmit);
moviesRootEl.addEventListener('click', onMovieItemClick);
watchTrailerBtnEl.addEventListener('click', onWatchTrailerBtnClick);
addToQueueBtnEl.addEventListener('click', onAddToQueueClick);
