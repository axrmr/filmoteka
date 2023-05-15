import getDOMRefs from './scripts/getDOMRefs';

// EventHandlers
import handleModal from './scripts/eventHandlers/handleModal';
import onAddToQueueClick from './scripts/eventHandlers/onAddToQueueBtnClick';
import onAddToWatchedBtnClick from './scripts/eventHandlers/onAddToWatchedBtnClick';
import onCloseTrailerClick from './scripts/eventHandlers/onCloseTrailerClick';
import onDOMContentLoaded from './scripts/eventHandlers/onDOMContentLoaded';
import onHomeClick from './scripts/eventHandlers/onHomeBtnClick';
import onMovieItemClick from './scripts/eventHandlers/onMovieItemClick';
import onMyLibraryClick from './scripts/eventHandlers/onMyLibBtnClick';
import onSearchFormSubmit from './scripts/eventHandlers/onSearchFormSubmit';
import onWatchTrailerBtnClick from './scripts/eventHandlers/onWatchTrailerBtnClick';

// Pagination
import onLibWatchedBtnClick from './scripts/eventHandlers/onLibWatchedBtnClick';
import './scripts/pagination';

const {
  addToWatchedBtnEl,
  addToQueueBtnEl,
  closeModalBtnEl,
  closeTrailerBtnEl,
  homeBtnEl,
  logoEl,
  modalBackdropEl,
  myLibBtnEl,
  searchFormEl,
  watchTrailerBtnEl,
  moviesRootEl,
  libQueueBtnEl,
  libWatchedBtnEl,
} = getDOMRefs();

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
addToQueueBtnEl.addEventListener('click', onAddToQueueClick);
addToWatchedBtnEl.addEventListener('click', onAddToWatchedBtnClick);
closeModalBtnEl.addEventListener('click', handleModal.closeBtnClick);
closeTrailerBtnEl.addEventListener('click', onCloseTrailerClick);
homeBtnEl.addEventListener('click', onHomeClick);
logoEl.addEventListener('click', onHomeClick);
libQueueBtnEl.addEventListener('click', onMyLibraryClick);
libWatchedBtnEl.addEventListener('click', onLibWatchedBtnClick);
modalBackdropEl.addEventListener('click', handleModal.backdropClick);
myLibBtnEl.addEventListener('click', onMyLibraryClick);
searchFormEl.addEventListener('submit', onSearchFormSubmit);
moviesRootEl.addEventListener('click', onMovieItemClick);
watchTrailerBtnEl.addEventListener('click', onWatchTrailerBtnClick);
