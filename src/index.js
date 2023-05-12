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

// Pagination
import './scripts/pagination';

const {
  closeModalBtnEl,
  closeTrailerBtnEl,
  homeBtnEl,
  libQueueBtnEl,
  logoEl,
  modalBackdropEl,
  myLibBtnEl,
  searchFormEl,
  trendingEl,
  addToQueueBtnEl,
  watchTrailerEl,
  trailerRootEl,
  moviesRootEl,
} = getDOMRefs();

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
closeModalBtnEl.addEventListener('click', handleModal.closeBtnClick);
closeTrailerBtnEl.addEventListener('click', onCloseTrailerClick);
homeBtnEl.addEventListener('click', onHomeClick);
// libQueueBtnEl.addEventListener('click', onLibQueueBtnClick);
logoEl.addEventListener('click', onHomeClick);
modalBackdropEl.addEventListener('click', handleModal.backdropClick);
myLibBtnEl.addEventListener('click', onMyLibraryClick);
searchFormEl.addEventListener('submit', onSearchFormSubmit);
moviesRootEl.addEventListener('click', onMovieItemClick);
addToQueueBtnEl.addEventListener('click', onAddToQueueClick);
watchTrailerEl.addEventListener('click', () => {
  trailerRootEl.classList.add('visible');
});
